import { MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "../data/content";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/15 bg-mind-dark"
          : "border-white/10 bg-mind-dark/95"
      }`}
    >
      <div className="mx-auto flex h-16 w-[calc(100%-2rem)] items-center justify-between gap-3 md:w-[94%] lg:w-[82%]">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring-dark whitespace-nowrap rounded-sm text-sm font-medium text-white/85 transition-colors hover:text-mind-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="focus-ring-dark hidden shrink-0 items-center gap-1.5 rounded-full border border-mind-cyan px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-mind-blue xl:flex"
        >
          <MessageCircle size={15} />
          Fale Conosco
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="focus-ring-dark flex h-11 w-11 items-center justify-center rounded-sm text-white xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navegação móvel"
        hidden={!open}
        className="border-t border-white/10 bg-mind-dark px-6 py-5 xl:hidden"
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring-dark rounded-sm text-sm font-medium text-mind-muted hover:text-mind-cyan"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="focus-ring-dark flex items-center justify-center gap-2 rounded-full bg-mind-blue px-5 py-2.5 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={16} />
            Fale Conosco
          </a>
        </div>
      </nav>
    </header>
  );
}
