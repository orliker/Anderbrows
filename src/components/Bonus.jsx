import { useReveal, useCountUp } from '../hooks/useReveal.js'

const BONUS = [
  {
    n: '01',
    t: 'Apoio vitalício via WhatsApp',
    d: 'Acompanhamento real durante toda a sua vida profissional. Tire dúvidas sempre que precisar.',
  },
  {
    n: '02',
    t: 'Comunidade Anderbrows',
    d: 'Faça parte de uma rede ativa de profissionais formadas pelo método Anderbrows.',
  },
  {
    n: '03',
    t: 'Eventos exclusivos',
    d: 'Acesso prioritário a workshops, encontros e experiências da academia.',
  },
  {
    n: '04',
    t: 'Descontos em outras formações',
    d: 'Continue a evoluir — micropigmentação, microblading, nanoblading e mais, com vantagens reservadas.',
  },
]

export default function Bonus() {
  const ref = useReveal({ delayBetween: 90 })
  const kitCountRef = useCountUp(30, { duration: 1600 })

  return (
    <section
      id="bonus"
      ref={ref}
      className="relative py-20 sm:py-28 bg-cream-50 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />
      <div className="absolute -top-32 -right-20 w-[450px] h-[450px] rounded-full bg-champagne-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[400px] h-[400px] rounded-full bg-champagne-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow">Bónus exclusivos da formação</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            Mais do que uma formação — <em className="not-italic italic gold-text">um caminho completo</em>.
          </h2>
          <p className="reveal-init mt-5 text-mocha-700 leading-relaxed text-base sm:text-lg max-w-2xl">
            Para além da teoria e da prática em modelo, oferecemos um conjunto de bónus pensados
            para que comece a sua carreira com o pé direito — e nunca se sinta sozinha no caminho.
          </p>
        </div>

        {/* HIGHLIGHT BANNER — Kit 30 procedimentos */}
        <div className="reveal-init mt-12 sm:mt-14">
          <div className="relative rounded-3xl bg-mocha-900 text-cream-50 overflow-hidden border border-mocha-700/50">
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-champagne-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-champagne-500/10 blur-3xl pointer-events-none" />

            <div className="relative grid sm:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-10 items-center">
              <div className="sm:col-span-4 flex items-center gap-5 sm:block">
                <div className="text-[10px] uppercase tracking-widest2 text-champagne-400 hidden sm:block">
                  Destaque · Kit incluído
                </div>
                <div className="flex items-baseline gap-2 sm:mt-3">
                  <span
                    ref={kitCountRef}
                    className="font-display text-6xl sm:text-7xl lg:text-8xl gold-text leading-none"
                  >
                    0
                  </span>
                  <span className="font-display text-2xl sm:text-3xl text-champagne-400">
                    procedimentos
                  </span>
                </div>
              </div>

              <div className="sm:col-span-8 sm:border-l sm:border-cream-50/10 sm:pl-8">
                <div className="text-[10px] uppercase tracking-widest2 text-champagne-400 sm:hidden mb-2">
                  Destaque · Kit incluído
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream-50 leading-tight">
                  Kit surpresa para iniciar a sua carreira.
                </h3>
                <p className="mt-3 text-cream-200/80 text-sm sm:text-base leading-relaxed max-w-xl">
                  Recebe um kit profissional com tudo o que precisa para realizar até{' '}
                  <strong className="text-cream-50">30 procedimentos completos</strong>. Comece
                  a faturar desde o primeiro cliente, sem preocupações com material.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest2 text-cream-200/70">
                  <span className="flex items-center gap-2">
                    <Check /> Material profissional
                  </span>
                  <span className="flex items-center gap-2">
                    <Check /> Pronto a usar
                  </span>
                  <span className="flex items-center gap-2">
                    <Check /> Já incluído no valor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus list — full width grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-10 sm:mt-12">
          {BONUS.map((b) => (
            <article
              key={b.n}
              className="reveal-init group flex items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-cream-200 hover:border-champagne-500/40 hover:shadow-card hover:-translate-y-0.5 transition-all duration-500"
            >
              <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-cream-100 flex items-center justify-center font-display text-base text-champagne-600 group-hover:bg-gold-grad group-hover:text-mocha-900 transition-all duration-500">
                {b.n}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg sm:text-xl text-mocha-900 leading-snug">
                  {b.t}
                </h3>
                <p className="mt-1.5 text-sm text-mocha-700 leading-relaxed">
                  {b.d}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-init mt-7 flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-mocha-700/70">
          <span className="w-10 h-px bg-champagne-500/60" />
          <span>Tudo incluído na formação</span>
        </div>
      </div>
    </section>
  )
}

function Check() {
  return (
    <span className="w-3.5 h-3.5 rounded-full bg-champagne-500/20 text-champagne-400 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
