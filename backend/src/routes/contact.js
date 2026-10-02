import { Router } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

export const contactRouter = Router();

const contactSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Nome deve ter pelo menos 2 caracteres.")
      .max(100, "Nome deve ter no máximo 100 caracteres.")
      .refine(
        (value) => !/[\u0000-\u001f\u007f]/.test(value),
        "Nome inválido.",
      ),
    email: z
      .string()
      .trim()
      .max(254, "E-mail muito longo.")
      .email("E-mail inválido."),
    phone: z
      .string()
      .trim()
      .max(30, "Telefone deve ter no máximo 30 caracteres.")
      .optional()
      .default(""),
    message: z
      .string()
      .trim()
      .min(10, "Mensagem deve ter pelo menos 10 caracteres.")
      .max(5000, "Mensagem deve ter no máximo 5.000 caracteres.")
      .refine(
        (value) =>
          !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value),
        "Mensagem inválida.",
      ),
  })
  .strict();

export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

async function sendEmail({ name, email, phone, message }) {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn("SMTP não configurado; mensagem de contato não foi enviada.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"MindCore Site" <${SMTP_USER}>`,
    to: CONTACT_EMAIL || SMTP_USER,
    replyTo: email,
    subject: `[MindCore] Nova mensagem de ${name}`,
    text: [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone: ${phone || "Não informado"}`,
      "",
      "Mensagem:",
      message,
    ].join("\n"),
    html: `
      <h2>Nova mensagem do site MindCore</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(phone || "Não informado")}</p>
      <hr />
      <p>${escapeHtml(message).replace(/\r?\n/g, "<br />")}</p>
    `,
  });

  return true;
}

contactRouter.post("/", async (req, res) => {
  try {
    const result = contactSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: result.error.issues[0]?.message || "Dados de contato inválidos.",
      });
    }

    const sent = await sendEmail(result.data);
    if (!sent) {
      return res.status(503).json({
        error:
          "O envio de mensagens está temporariamente indisponível. Tente novamente mais tarde.",
      });
    }

    res.json({ success: true, message: "Mensagem recebida com sucesso!" });
  } catch (err) {
    console.error("Erro ao processar contato:", err);
    res.status(500).json({ error: "Erro interno ao enviar mensagem." });
  }
});
