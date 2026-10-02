import { Code2, Headphones, Network } from "lucide-react";
import { services } from "../data/content";
import { SectionLabel } from "./SectionLabel";

const serviceIcons = [Code2, Network, Headphones];
const featuredTitles = [
  "Desenvolvimento",
  "Redes & Infraestrutura",
  "Suporte Técnico",
];

export function Services() {
  const featuredServices = services.filter((service) =>
    featuredTitles.includes(service.title),
  );

  return (
    <section id="servicos" className="bg-mind-gray py-10 md:py-12">
      <div className="mx-auto grid w-[calc(100%-2rem)] gap-5 md:w-[94%] md:grid-cols-2 md:items-center md:gap-5 lg:w-[82%] lg:grid-cols-[1.1fr_repeat(3,minmax(0,1fr))]">
        <div id="sobre" className="md:col-span-2 md:pr-3 lg:col-span-1">
          <SectionLabel>Nossos serviços</SectionLabel>
          <h2 className="mt-3 text-2xl font-extrabold leading-[1.12] text-mind-dark md:text-3xl">
            Soluções sob medida{" "}
            <span className="text-mind-blue">para cada necessidade.</span>
          </h2>
          <p className="mt-4 max-w-[19rem] text-sm leading-relaxed text-mind-dark md:text-base">
            Tecnologia que se adapta ao seu momento e aos seus objetivos.
          </p>
        </div>

        {featuredServices.map((service, i) => {
          const Icon = serviceIcons[i];
          return (
            <a
              href="#contato"
              key={service.title}
              aria-label={`Falar com a MindCore sobre ${service.title}`}
              className="min-h-[148px] rounded-lg border border-slate-200/80 bg-white p-5 transition duration-200 ease-out hover:-translate-y-1 hover:border-mind-cyan/60 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:border-mind-blue focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mind-blue focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <Icon className="text-mind-blue" size={24} strokeWidth={2} />
              <h3 className="mt-3 text-base font-bold leading-tight text-mind-dark md:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mind-dark md:text-base">
                {service.description}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
