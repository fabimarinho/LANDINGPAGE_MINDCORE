import { MessageCircle } from "lucide-react";
import { contactInfo } from "../data/content";

export function CTABanner() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-y border-mind-cyan/40 bg-mind-navy text-white"
    >
      <div
        className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-[center_74%] opacity-35"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-[calc(100%-2rem)] items-center gap-4 py-6 md:w-[82%] md:grid-cols-[1.1fr_1.2fr_0.9fr]">
        <h2 className="text-2xl font-bold leading-tight md:text-3xl">
          Vamos conversar sobre{" "}
          <span className="text-mind-cyan">o seu negócio?</span>
        </h2>
        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring-dark inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-mind-cyan px-4 text-sm font-medium text-white transition-colors hover:bg-mind-cyan/15 md:text-base"
        >
          <MessageCircle size={17} />
          WhatsApp
          <span className="border-l border-white/30 pl-2 text-white/75">
            {contactInfo.whatsappDisplay}
          </span>
        </a>
        <p className="border-l border-mind-cyan/60 pl-3 text-sm leading-snug text-white/85 md:text-base">
          Tecnologia é o meio.
          <br />
          Seu crescimento é o destino.
        </p>
      </div>
    </section>
  );
}
