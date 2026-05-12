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
    <section ref={ref} className="relative py-20 sm:py-28 bg-off-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Sobre a modelo</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
              A prática é em modelo <em className="not-italic italic gold-text">real</em>.
            </h2>
            <p className="reveal-init mt-6 text-mocha-700 text-base leading-relaxed">
              A formanda traz a sua modelo para a parte prática da formação. <strong>A modelo é da inteira responsabilidade da formanda.</strong> A prática é realizada no período da tarde, em horário a ser comunicado.
            </p>
            
            <div className="reveal-init mt-8 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center text-terracotta">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
               </div>
               <div className="text-sm font-bold text-mocha-900 uppercase tracking-widest text-xs">Critérios de segurança</div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
            {REQUIREMENTS.map((r) => (
              <article
                key={r.n}
                className="reveal-init group relative rounded-[32px] border border-warm-beige bg-white p-7 hover:border-terracotta/40 hover:shadow-card transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest2 text-terracotta">
                    {r.n}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-warm-beige/30 flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
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
