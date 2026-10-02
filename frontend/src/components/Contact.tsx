import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { contactInfo } from "../data/content";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const apiBase = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Erro ao enviar mensagem.",
      );
    }
  };

  return (
    <section id="contato" className="bg-mind-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-mind-blue">
            Fale Conosco
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-mind-dark md:text-4xl">
            Vamos conversar sobre o{" "}
            <span className="text-mind-blue">seu negócio?</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
              <MessageCircle className="text-green-500" size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-mind-dark">WhatsApp</h3>
            <p className="mt-2 text-sm text-gray-500">Fale agora mesmo</p>
            <span className="mt-4 block text-sm font-medium text-gray-600">
              {contactInfo.whatsappDisplay}
            </span>
            <span className="mt-2 inline-block text-sm font-semibold text-green-600 group-hover:underline">
              Abrir WhatsApp →
            </span>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mind-blue/10">
              <Mail className="text-mind-blue" size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-mind-dark">E-mail</h3>
            <p className="mt-2 text-sm text-gray-500">Envie sua mensagem</p>
            <span className="mt-4 inline-block text-sm font-semibold text-mind-blue group-hover:underline">
              {contactInfo.email}
            </span>
          </a>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mind-blue/10">
              <MapPin className="text-mind-blue" size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-mind-dark">
              Localização
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Atendemos todo o Brasil e presencialmente no RJ
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-mind-blue">
              {contactInfo.address}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
          <h3 className="text-lg font-bold text-mind-dark">
            Ou envie uma mensagem
          </h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-mind-dark"
                >
                  Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Seu nome"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus-visible:border-mind-blue focus-visible:ring-2 focus-visible:ring-mind-blue focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-mind-dark"
                >
                  E-mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Seu e-mail"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus-visible:border-mind-blue focus-visible:ring-2 focus-visible:ring-mind-blue focus-visible:ring-offset-2"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-phone"
                className="text-sm font-medium text-mind-dark"
              >
                Telefone (opcional)
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Seu telefone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus-visible:border-mind-blue focus-visible:ring-2 focus-visible:ring-mind-blue focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium text-mind-dark"
              >
                Como podemos ajudar?
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Escreva sua mensagem"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus-visible:border-mind-blue focus-visible:ring-2 focus-visible:ring-mind-blue focus-visible:ring-offset-2"
              />
            </div>

            {status === "success" && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm font-medium text-green-600"
              >
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="focus-ring-dark inline-flex items-center gap-2 rounded-full bg-mind-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {status === "loading" ? "Enviando..." : "Enviar mensagem"}
            </button>
            {status === "loading" && (
              <p role="status" aria-live="polite" className="sr-only">
                Enviando mensagem.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
