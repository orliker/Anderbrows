import { AUDIENCE } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Audience() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-deep-brown text-off-white overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow text-terracotta-soft">Para quem é</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream leading-tight">
            Para quem quer transformar estética em atendimento profissional.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {AUDIENCE.map((a, i) => (
            <article
              key={a.title}
              className="reveal-init relative rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm p-7 transition-all duration-500 hover:border-terracotta/40 hover:bg-white/[0.08] hover:-translate-y-1"
            >
              <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mb-8">
                Perfil 0{i + 1}
              </div>
              <h3 className="font-display text-2xl text-warm-cream leading-tight">{a.title}</h3>
              <p className="mt-4 text-sm text-warm-beige/70 leading-relaxed">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
