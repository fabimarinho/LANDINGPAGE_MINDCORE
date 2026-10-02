import { ArrowRight } from "lucide-react";
import { processSteps } from "../data/content";
import { SectionLabel } from "./SectionLabel";

export function Process() {
  return (
    <section id="processo" className="bg-mind-navy py-10 text-white md:py-11">
      <div className="mx-auto grid w-[calc(100%-2rem)] gap-5 md:w-[94%] md:grid-cols-1 md:items-start md:gap-6 lg:w-[82%] lg:grid-cols-[1.5fr_3fr] lg:items-center">
        <div className="max-w-[20rem] lg:max-w-[20rem]">
          <SectionLabel tone="dark">Como trabalhamos</SectionLabel>
          <h2 className="mt-3 text-2xl font-extrabold leading-[1.08] md:text-3xl">
            Do diagnóstico
            <br />
            <span className="text-mind-cyan">à solução.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mind-muted md:text-base">
            Diagnóstico, planejamento e suporte para uma solução que acompanha
            seu negócio.
          </p>
        </div>

        <ol className="m-0 grid list-none grid-cols-2 gap-6 p-0 lg:grid-cols-4 lg:gap-4">
          {processSteps.map((step, i) => (
            <li
              key={step.title}
              className="relative min-w-0 border-l border-white/10 pl-4 first:border-0 first:pl-0"
            >
              {i < processSteps.length - 1 && (
                <ArrowRight
                  className="absolute right-1 top-2 hidden text-mind-cyan md:block"
                  size={15}
                  aria-hidden="true"
                />
              )}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-mind-cyan text-sm font-semibold text-white"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold text-white md:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mind-muted md:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
