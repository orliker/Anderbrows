import { PILLARS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Authority() {
  const ref = useReveal({ delayBetween: 110 })

  return (
    <section id="sobre" ref={ref} className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-cream-100/40 pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow">Anderbrows Beauty &amp; Academy</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            Uma marca construída sobre cinco <em className="font-display italic gold-text not-italic">pilares</em>.
          </h2>
          <p className="reveal-init mt-6 text-mocha-700 text-base sm:text-lg leading-relaxed max-w-2xl">
            Mais do que uma formação, oferecemos um caminho completo: técnica de excelência,
            ética profissional e acompanhamento que continua muito depois do dia da formação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-14">
          {PILLARS.map((p, i) => (
            <article
              key={p.label}
              className="reveal-init card-premium group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-medium uppercase tracking-widest2 text-champagne-600">
                  0{i + 1}
                </span>
                <span className="w-8 h-px bg-gradient-to-r from-champagne-500 to-transparent" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-mocha-900 leading-tight">
                {p.label}
              </h3>
              <p className="mt-3 text-sm text-mocha-700 leading-relaxed">
                {p.text}
              </p>
              <div className="mt-6 h-px w-full bg-cream-200 group-hover:bg-champagne-500/40 transition-colors duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
