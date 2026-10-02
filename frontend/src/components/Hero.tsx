import { ArrowRight, Shield, Zap, Wifi, Lightbulb } from "lucide-react";
import { heroFeatures } from "../data/content";

const featureIcons = [Shield, Zap, Wifi, Lightbulb];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-mind-dark pb-4 pt-20 text-white"
    >
      <div
        className="hero-bg absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/hero-background.jpg)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-mind-dark via-mind-dark/70 to-mind-dark/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] md:w-[82%]">
        <div className="max-w-[23rem] text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-mind-cyan/70 px-2.5 py-1 text-xs font-medium uppercase leading-tight tracking-[0.08em] text-white">
            Tecnologia que transforma
          </p>
          <h1 className="mt-2 text-[1.55rem] font-extrabold leading-[1.02] md:text-[1.65rem]">
            Tecnologia inteligente
            <br />
            <span className="text-mind-cyan">para impulsionar</span>
            <br />o seu negócio.
          </h1>
          <p className="mt-2 max-w-[22rem] text-sm leading-[1.45] text-mind-muted">
            Soluções completas em tecnologia para sua empresa crescer com
            segurança, eficiência e inovação.
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <a
              href="#servicos"
              className="focus-ring-dark inline-flex items-center gap-1.5 rounded-full bg-mind-blue px-4 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Nossos Serviços
              <ArrowRight size={13} />
            </a>
            <a
              href="#sobre"
              className="focus-ring-dark inline-flex items-center rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-mind-cyan hover:text-mind-cyan"
            >
              Conheça a MindCore
            </a>
          </div>
        </div>

        <div className="mt-3.5 grid grid-cols-2 border-t border-white/15 pt-1.5 md:grid-cols-4">
          {heroFeatures.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={feature.title}
                className="flex min-h-[30px] items-center gap-2 border-white/10 px-2 first:pl-0 odd:border-r md:border-r md:odd:border-r"
              >
                <Icon
                  className="shrink-0 text-mind-cyan"
                  size={18}
                  strokeWidth={1.75}
                />
                <p className="text-sm font-medium text-white">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
