import { AUDIENCE } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

const icons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" key="i0">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c1.5-3.6 4.2-5 7-5s5.5 1.4 7 5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" key="i1">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
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
      <path d="M12 3v18M3 12h18M12 3l-4 4M12 3l4 4M12 21l-4-4M12 21l4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
]

export default function Audience() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-deep-brown text-off-white overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-terracotta-soft/10 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow text-terracotta-soft">Para quem é esta formação</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream leading-tight">
            Pensada para mulheres que querem <em className="not-italic italic gold-text">liderar</em> o seu próprio negócio.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {AUDIENCE.map((a, i) => (
            <article
              key={a.title}
              className="reveal-init relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-500 hover:border-terracotta/40 hover:bg-white/[0.08] hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-terracotta/15 text-terracotta-soft flex items-center justify-center mb-8 group-hover:bg-terracotta/30 transition-all duration-500 group-hover:scale-110">
                <span className="w-7 h-7 block">{icons[i]}</span>
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
