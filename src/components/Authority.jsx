import { PILLARS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

const PILLAR_DETAILS = ['✦', '♡', '✨', '✦']

export default function Authority() {
  const ref = useReveal({ delayBetween: 110 })

  return (
    <section id="sobre" ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#F3EEE6' }}>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-gold-warm/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Anderbrows Academy ✦</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
              Construída sobre a <em className="not-italic italic gold-text">excelência</em> e o detalhe.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal-init text-deep-brown text-base sm:text-lg leading-relaxed font-medium">
              Mais do que ensinar técnica, preparamos profissionais com sensibilidade, segurança e ética. Cada detalhe importa: do primeiro mapeamento ao apoio que continua pós-formação. ♡
            </p>
          </div>
        </div>

        {/* Gold divider */}
        <div className="reveal-init w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent mb-16" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <article
              key={p.label}
              className="reveal-init relative p-8 rounded-[32px] border border-warm-beige bg-white transition-all duration-500 hover:border-terracotta/40 hover:shadow-card hover:-translate-y-1.5 group shadow-sm overflow-hidden"
            >
              {/* Subtle warm glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/0 to-terracotta/0 group-hover:from-terracotta/3 group-hover:to-transparent transition-all duration-700 rounded-[32px] pointer-events-none" />

              <div className="flex items-center justify-between mb-8 relative">
                <span className="text-[10px] font-bold uppercase tracking-widest2 text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                  0{i + 1}
                </span>
                <span className="text-warm-beige group-hover:text-terracotta transition-colors duration-500 text-lg select-none">
                  {PILLAR_DETAILS[i]}
                </span>
              </div>
              <h3 className="font-display text-2xl text-deep-brown leading-tight relative">
                {p.label}
              </h3>
              <p className="mt-4 text-sm text-deep-brown/70 leading-relaxed relative">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
