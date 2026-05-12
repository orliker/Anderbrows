import { PILLARS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Authority() {
  const ref = useReveal({ delayBetween: 110 })

  return (
    <section id="sobre" ref={ref} className="relative py-20 sm:py-28 bg-warm-cream">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Anderbrows Academy</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
              Construída sobre a <em className="not-italic italic gold-text">excelência</em> e o detalhe.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal-init text-mocha-800/80 text-base sm:text-lg leading-relaxed font-medium">
              Mais do que ensinar técnica, preparamos profissionais com sensibilidade, segurança e ética. Cada detalhe importa: do primeiro mapeamento ao apoio que continua pós-formação. ♡
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <article
              key={p.label}
              className="reveal-init relative p-8 rounded-[32px] border border-warm-beige bg-off-white/80 backdrop-blur transition-all duration-500 hover:border-terracotta/40 hover:shadow-card hover:-translate-y-1 hover:bg-white group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest2 text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                  0{i + 1}
                </span>
                <div className="w-8 h-px bg-warm-beige group-hover:bg-terracotta group-hover:w-12 transition-all duration-500" />
              </div>
              <h3 className="font-display text-2xl text-deep-brown leading-tight">
                {p.label}
              </h3>
              <p className="mt-4 text-sm text-mocha-800/70 leading-relaxed">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
