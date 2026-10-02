import { Mail, MessageCircle } from "lucide-react";
import { navLinks, contactInfo } from "../data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-mind-dark text-white">
      <div className="mx-auto flex w-[calc(100%-2rem)] flex-wrap items-center justify-between gap-x-6 gap-y-5 py-8 md:w-[82%]">
        <Logo size="sm" />
        <nav
          aria-label="Navegação do rodapé"
          className="hidden items-center gap-2 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring-dark whitespace-nowrap rounded-sm text-xs text-white/75 transition-colors hover:text-mind-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring-dark inline-flex items-center gap-1.5 rounded-sm text-xs text-white/85"
        >
          <MessageCircle size={15} />
          {contactInfo.whatsappDisplay}
        </a>
        <a
          href={`mailto:${contactInfo.email}`}
          aria-label={`E-mail temporário: ${contactInfo.email}`}
          className="focus-ring-dark inline-flex items-center gap-2 rounded-sm text-sm text-white/85"
        >
          <Mail size={16} aria-hidden="true" />
          <span>
            <span className="block text-xs text-white/65">
              E-mail temporário
            </span>
            <span className="break-all">{contactInfo.email}</span>
          </span>
        </a>
        <p className="w-full border-t border-white/15 pt-3 text-center text-xs text-white/65 md:w-auto md:border-0 md:pt-0">
          © {new Date().getFullYear()} MindCore. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
