import { ArrowRight, Brain, Ear, Eye, HeartHandshake } from 'lucide-react'
import { philosophyItems } from '../data/content'
import { SectionLabel } from './SectionLabel'

const philosophyIcons = [Ear, Brain, Eye, HeartHandshake]

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Sobre a MindCore</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-mind-dark md:text-4xl lg:text-5xl">
              Tecnologia começa com uma{' '}
              <span className="text-mind-cyan">conversa.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mind-subtle md:text-lg">
              Acreditamos que a melhor tecnologia nasce do entendimento profundo
              das necessidades de cada cliente. Por isso, nosso processo começa
              sempre ouvindo — para depois entregar soluções que realmente
              fazem diferença.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mind-subtle md:text-lg">
              Somos uma empresa de tecnologia focada em resultados, com
              atendimento humanizado e soluções personalizadas para empresas de
              todos os portes.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-mind-blue px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Conversar com a MindCore
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="rounded-3xl bg-mind-navy p-8 lg:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-mind-cyan/15">
              <Brain className="text-mind-cyan" size={30} />
            </div>
            <h3 className="text-xl font-bold text-white">Nossa filosofia</h3>
            <p className="mt-3 text-sm leading-relaxed text-mind-muted">
              Unimos escuta ativa e excelência técnica para ajudar empresas a
              crescer com segurança, clareza e propósito em cada projeto.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7">
              {philosophyItems.map((item, i) => {
                const Icon = philosophyIcons[i]
                return (
                  <div key={item.title} className="flex flex-col gap-2">
                    <Icon className="text-mind-cyan" size={22} />
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-mind-subtle">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
