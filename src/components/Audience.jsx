import { AUDIENCE } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

const icons = [
  // Iniciantes
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" key="i0">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.5-3.6 4.2-5 7-5s5.5 1.4 7 5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" key="i1">
      <path d="M3 10h18M5 10v10h14V10M9 10V6a3 3 0 0 1 6 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" key="i2">
      <path d="M3 17l4-4 4 4 7-7 3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 6h7v7" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" key="i3">
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.6L12 15.7 7.1 18.3l.9-5.6-4-3.9 5.5-.8z" strokeLinejoin="round" />
    </svg>
  ),
]

export default function Audience() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-mocha-900 text-cream-50 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-champagne-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow text-cream-200/80">Para quem é esta formação</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-cream-50">
            Pensada para quem quer <em className="not-italic italic gold-text">levar a sério</em>{' '}
            a arte do design de sobrancelhas.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {AUDIENCE.map((a, i) => (
            <article
              key={a.title}
              className="reveal-init relative rounded-2xl border border-cream-50/10 bg-mocha-800/40 backdrop-blur p-7 transition-all duration-500 hover:border-champagne-500/40 hover:bg-mocha-800/60 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-champagne-500/15 text-champagne-400 flex items-center justify-center mb-6 group-hover:bg-champagne-500/25 transition-colors">
                <span className="w-6 h-6 block">{icons[i]}</span>
              </div>
              <h3 className="font-display text-xl text-cream-50 leading-tight">{a.title}</h3>
              <p className="mt-3 text-sm text-cream-200/70 leading-relaxed">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
