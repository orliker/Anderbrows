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
    d: 'Por segurança, a modelo não pode estar grávida nem em período de amamentação.',
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
    <section ref={ref} className="relative py-16 sm:py-24 bg-warm-beige studio-edge-light studio-hairline overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Sobre a modelo</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
              A prática é feita em modelo real.
            </h2>
            <p className="reveal-init mt-6 text-mocha-700 text-base leading-relaxed">
              A formanda traz a sua modelo para a parte prática. A modelo é da inteira responsabilidade da formanda
              e deve cumprir os critérios de segurança definidos pela academia.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
            {REQUIREMENTS.map((r) => (
              <article
                key={r.n}
                className="reveal-init group relative rounded-[24px] border border-warm-beige bg-white p-7 hover:border-terracotta/40 hover:shadow-card transition-all duration-500"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest2 text-terracotta mb-8">{r.n}</div>
                <h3 className="font-display text-xl text-mocha-900 leading-tight">{r.t}</h3>
                <p className="mt-4 text-xs text-mocha-700 leading-relaxed">{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
