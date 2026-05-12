import { useReveal } from '../hooks/useReveal.js'

const TRUST = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Método Anderbrows ✦',
    sub: 'Técnica exclusiva e precisão absoluta',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 6v6l4 2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    label: '10+ anos ♡',
    sub: 'A formar profissionais em Portugal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Kit Profissional',
    sub: 'Material para até 30 procedimentos',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Apoio contínuo ✨',
    sub: 'Mentoria e suporte pós-formação',
  },
]

export default function TrustStrip() {
  const ref = useReveal({ delayBetween: 110, y: 16 })

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-14 border-y border-white/8"
      style={{ background: '#1A100B' }}
    >
      {/* Top/bottom shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TRUST.map((t, i) => (
            <div
              key={i}
              className="reveal-init flex items-center gap-4 group cursor-default"
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-terracotta/12 border border-terracotta/25 text-terracotta flex items-center justify-center group-hover:bg-terracotta group-hover:text-white group-hover:scale-110 group-hover:border-terracotta transition-all duration-500 shadow-sm">
                <span className="w-6 h-6 block">{t.icon}</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-bold text-warm-cream leading-tight group-hover:text-terracotta transition-colors duration-300">
                  {t.label}
                </div>
                <div className="mt-1 text-xs text-warm-beige/55 font-medium leading-snug">
                  {t.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
