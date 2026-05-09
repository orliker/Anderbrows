import { useReveal } from '../hooks/useReveal.js'

const REQUIREMENTS = [
  {
    n: '01',
    t: 'Sem procedimentos prévios',
    d: 'A modelo não pode ter microblading, nanoblading ou micropigmentação nas sobrancelhas.',
  },
  {
    n: '02',
    t: 'Não gestante ou lactante',
    d: 'Por questões de segurança, a modelo não pode estar grávida nem em período de amamentação.',
  },
  {
    n: '03',
    t: 'Maior de idade',
    d: 'A modelo deve ter 18 anos ou mais à data da formação.',
  },
]

export default function ModelRequirements() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section ref={ref} className="relative py-20 sm:py-24 bg-cream-100/60">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow">Sobre a modelo</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl">
              A prática é em modelo <em className="not-italic italic gold-text">real</em>.
            </h2>
            <p className="reveal-init mt-5 text-mocha-700 leading-relaxed">
              A formanda traz a sua modelo para a parte prática da formação. Caso tenha dificuldade
              em encontrar alguém, ajudamos no processo. A prática é realizada à tarde, em horário
              a definir.
            </p>
            <div className="reveal-init mt-7 flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-mocha-700/70">
              <span className="w-10 h-px bg-champagne-500/60" />
              <span>3 pré-requisitos da modelo</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {REQUIREMENTS.map((r) => (
              <article
                key={r.n}
                className="reveal-init group relative rounded-2xl border border-cream-200 bg-white p-6 hover:border-champagne-500/40 hover:shadow-card transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-medium uppercase tracking-widest2 text-champagne-600">
                    {r.n}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-cream-100 flex items-center justify-center group-hover:bg-gold-grad transition-all duration-500">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-mocha-900"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M5 12l5 5 9-11"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="font-display text-lg text-mocha-900 leading-snug">{r.t}</h3>
                <p className="mt-2 text-sm text-mocha-700 leading-relaxed">{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
