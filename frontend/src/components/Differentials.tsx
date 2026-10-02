import {
  BadgeCheck,
  Handshake,
  MonitorCog,
  ShieldCheck,
  SlidersHorizontal,
  UsersRound,
  Wifi,
} from "lucide-react";
import { differentials } from "../data/content";
import { SectionLabel } from "./SectionLabel";

const diffIcons = [UsersRound, Handshake, SlidersHorizontal, BadgeCheck];
const units = [
  {
    name: "MindCore Labs",
    detail: "Desenvolvimento e inovação",
    Icon: MonitorCog,
  },
  { name: "MindCore Infra", detail: "Redes e infraestrutura", Icon: Wifi },
  {
    name: "MindCore Secure",
    detail: "Cibersegurança e proteção",
    Icon: ShieldCheck,
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-mind-gray py-14 md:py-16">
      <div className="mx-auto grid w-[calc(100%-2rem)] gap-8 md:w-[94%] md:grid-cols-2 md:items-start md:gap-8 lg:w-[82%] lg:grid-cols-[1.05fr_1.65fr] lg:gap-10">
        <div>
          <SectionLabel>Por que escolher a MindCore</SectionLabel>
          <h2 className="mt-3 text-2xl font-extrabold leading-[1.12] text-mind-dark md:text-3xl">
            Mais do que tecnologia,{" "}
            <span className="text-mind-blue">parceria de verdade.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mind-dark md:text-base">
            Soluções que acompanham sua empresa e geram valor em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:col-start-2 md:row-start-1">
          {differentials.map((item, i) => {
            const Icon = diffIcons[i];
            return (
              <div
                key={item.title}
                className="border-l border-slate-200 py-2 pl-5"
              >
                <Icon className="text-mind-blue" size={22} strokeWidth={1.8} />
                <h3 className="mt-2 break-words text-base font-bold leading-tight text-mind-dark md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mind-dark md:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-lg bg-mind-navy p-6 text-white md:col-span-2 md:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">
            {units.map(({ name, detail, Icon }) => (
              <div
                key={name}
                className="min-w-0 border-t border-white/15 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0 md:first:border-0 md:first:pl-0"
              >
                <Icon className="text-mind-cyan" size={19} />
                <h3 className="mt-2 break-words text-base font-semibold md:text-lg">
                  {name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65 md:text-base">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
