import { useReveal } from '../hooks/useReveal.js'

const TRUST = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.6L12 14.7 7.1 17.3 8 11.7l-4-3.9 5.5-.8z" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Método premiado',
    sub: 'Reconhecimento mundial em dermopigmentação',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 6v6l4 2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    label: '10+ anos',
    sub: 'A formar profissionais em Portugal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="11" r="2.5" />
        <path d="M3 19c.8-3 3.2-4.5 6-4.5s5.2 1.5 6 4.5M14 19c.5-2 2-3 3.5-3s2.5 1 3 2.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'Comunidade ativa',
    sub: 'Profissionais formadas pela academia',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Apoio vitalício',
    sub: 'WhatsApp e mentoria pós-formação',
  },
]

export default function TrustStrip() {
  const ref = useReveal({ delayBetween: 110, y: 16 })

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-12 border-y border-cream-200 bg-white/40 backdrop-blur"
    >
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {TRUST.map((t, i) => (
            <div
              key={i}
              className="reveal-init flex items-start gap-3 sm:gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-cream-100 text-champagne-600 flex items-center justify-center">
                <span className="w-5 h-5 block">{t.icon}</span>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-medium text-mocha-900 leading-tight">
                  {t.label}
                </div>
                <div className="mt-0.5 text-xs text-mocha-700/70 leading-snug">
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
