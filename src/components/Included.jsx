import { INCLUDED } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Included() {
  const ref = useReveal({ delayBetween: 60 })

  return (
    <section id="incluido" ref={ref} className="relative py-16 sm:py-24 bg-deep-brown text-warm-cream studio-edge-dark studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta-soft">O que está incluído</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-white">
              Uma formação desenhada para sair da sala com direção.
            </h2>
          </div>
          <p className="reveal-init lg:col-span-5 text-warm-beige/75 text-base sm:text-lg leading-relaxed font-medium">
            O foco é construir base técnica, mão prática e confiança para continuar a evoluir no atendimento real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {INCLUDED.map((item, i) => (
            <article
              key={item.t}
              className="reveal-init group relative p-7 rounded-[24px] border border-terracotta/20 bg-chocolate/50 backdrop-blur-sm hover:border-terracotta/50 hover:bg-chocolate transition-all duration-500 hover:-translate-y-1 shadow-lg"
            >
              <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mb-7">
                Inclui 0{i + 1}
              </div>
              <h3 className="font-display text-2xl text-white leading-tight">{item.t}</h3>
              <p className="mt-4 text-sm text-warm-beige/70 leading-relaxed font-medium">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
