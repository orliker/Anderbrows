import { useCountUp, useReveal } from '../hooks/useReveal.js'

function EarningsCard({ amount, procedures, accent }) {
  const ref = useCountUp(amount)
  return (
    <article
      className={`reveal-init relative rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 ${
        accent
          ? 'bg-mocha-900 text-cream-50 shadow-soft border border-mocha-700/50 hover:border-champagne-500/40'
          : 'bg-white border border-cream-200 hover:border-champagne-500/40 hover:shadow-card'
      }`}
    >
      {accent && (
        <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold-grad text-mocha-900 text-[10px] uppercase tracking-widest2 font-medium">
          Cenário ambicioso
        </div>
      )}

      <div className={`text-[10px] uppercase tracking-widest2 ${accent ? 'text-champagne-400' : 'text-mocha-700/60'}`}>
        {procedures} procedimentos / dia · 21 dias
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className={`font-display text-6xl sm:text-7xl leading-none ${accent ? 'gold-text' : 'text-mocha-900'}`}>
          <span ref={ref}>0</span>
        </span>
        <span className={`font-display text-3xl ${accent ? 'text-champagne-400' : 'text-champagne-600'}`}>€</span>
      </div>

      <p className={`mt-4 text-sm leading-relaxed ${accent ? 'text-cream-200/80' : 'text-mocha-700'}`}>
        Faturação mensal estimada com {procedures} procedimentos por dia,{' '}
        durante 21 dias úteis, a 15€ cada.
      </p>

      <div className={`mt-6 grid grid-cols-3 gap-4 ${accent ? 'text-cream-200/80' : 'text-mocha-700'}`}>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 opacity-70">Por procedimento</div>
          <div className={`mt-1 text-sm font-medium ${accent ? 'text-cream-50' : 'text-mocha-900'}`}>15€</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 opacity-70">Duração</div>
          <div className={`mt-1 text-sm font-medium ${accent ? 'text-cream-50' : 'text-mocha-900'}`}>~50 min</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 opacity-70">Dias / mês</div>
          <div className={`mt-1 text-sm font-medium ${accent ? 'text-cream-50' : 'text-mocha-900'}`}>21</div>
        </div>
      </div>
    </article>
  )
}

export default function Earnings() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-cream-50">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow">Possibilidade de faturação</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Transforme técnica em <em className="not-italic italic gold-text">rendimento</em>.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal-init text-mocha-700 text-base leading-relaxed">
              Exemplo de potencial de faturação como Designer de Sobrancelhas — dependendo da sua
              prática, agenda e dedicação profissional. Os números apresentados não constituem
              garantia, são apenas simulações.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <EarningsCard amount={945} procedures={3} />
          <EarningsCard amount={1575} procedures={5} accent />
        </div>

        <p className="reveal-init mt-8 text-xs text-mocha-700/70 max-w-2xl">
          * Cálculo baseado em 21 dias úteis × procedimentos por dia × 15€ por procedimento.
          Valores meramente ilustrativos.
        </p>
      </div>
    </section>
  )
}
