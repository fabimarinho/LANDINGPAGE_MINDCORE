import { Quote, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import { Reveal } from './Reveal'

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-mind-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-mind-blue">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-mind-dark md:text-4xl">
            O que nossos clientes{' '}
            <span className="text-mind-blue">dizem.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
            Relatos de empresas que cresceram com tecnologia feita sob medida.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delayMs={i * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mind-cyan/30 hover:shadow-lg">
                <Quote className="text-mind-blue/30" size={32} aria-hidden="true" />
                <div className="mt-3 flex gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-mind-blue text-mind-blue"
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-bold text-mind-dark">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    {item.role} · {item.company}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
