import { TRANSFORMATION } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Transformation() {
  const ref = useReveal({ delayBetween: 80 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="reveal-init">
            <span className="eyebrow center justify-center">A transformação</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            De aluna a <em className="not-italic italic gold-text">profissional</em> de referência.
          </h2>
          <p className="reveal-init mt-5 text-mocha-700 text-base sm:text-lg leading-relaxed">
            O que muda em si depois de fazer parte da Anderbrows.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 items-stretch relative">
          {/* BEFORE */}
          <div className="reveal-init relative rounded-3xl border border-cream-200 bg-white p-8 sm:p-10">
            <div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest2 text-mocha-700/50">
              Antes
            </div>
            <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-mocha-700" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 9l6 6M15 9l-6 6" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-mocha-900 leading-tight">
              Sem método. Sem direção.
            </h3>
            <ul className="mt-6 space-y-3">
              {TRANSFORMATION.before.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-mocha-700">
                  <span className="mt-1.5 w-3 h-px bg-mocha-700/40" />
                  <span className="text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connector arrow */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gold-grad text-mocha-900 items-center justify-center shadow-card z-10">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* AFTER */}
          <div className="reveal-init relative rounded-3xl bg-mocha-900 text-cream-50 p-8 sm:p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-champagne-500/15 blur-3xl pointer-events-none" />
            <div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest2 text-champagne-400">
              Depois
            </div>
            <div className="w-12 h-12 rounded-full bg-champagne-500/20 text-champagne-400 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-cream-50 leading-tight">
              Domínio técnico. Carreira em movimento.
            </h3>
            <ul className="mt-6 space-y-3">
              {TRANSFORMATION.after.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-cream-200/90">
                  <span className="mt-1.5 w-3 h-px bg-champagne-400" />
                  <span className="text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
