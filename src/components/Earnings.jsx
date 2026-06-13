import { useCountUp, useReveal } from '../hooks/useReveal.js'

function EarningsCard({ amount, procedures, accent }) {
  const ref = useCountUp(amount)

  return (
    <article
      className={`reveal-init relative rounded-[28px] p-8 sm:p-10 transition-all duration-700 hover:-translate-y-1 ${
        accent
          ? 'bg-chocolate text-warm-cream shadow-2xl border border-terracotta/20'
          : 'bg-white border border-warm-beige hover:border-terracotta/40'
      }`}
    >
      <div className={`text-[10px] uppercase tracking-widest2 font-bold ${accent ? 'text-terracotta-soft' : 'text-terracotta'}`}>
        Cenário com {procedures} atendimentos / dia · 21 dias úteis
      </div>

      <div className={`number-accent mt-7 flex items-baseline gap-3 pb-4 ${accent ? 'number-accent-dark' : ''}`}>
        <span className={`font-display text-7xl sm:text-8xl leading-none ${accent ? 'text-gold-light' : 'text-rich-black'}`}>
          <span ref={ref} className="count-number">0</span>
        </span>
        <span className={`font-display text-4xl ${accent ? 'text-terracotta-soft' : 'text-terracotta/60'}`}>€</span>
      </div>

      <p className={`mt-6 text-base leading-relaxed font-medium ${accent ? 'text-warm-beige/80' : 'text-deep-brown'}`}>
        Simulação de faturação mensal com serviço a 15€ por atendimento. Uma meta possível para construir com calma, agenda e carinho no atendimento.
      </p>

      <p className={`mt-8 pt-6 border-t text-xs leading-relaxed ${accent ? 'border-white/10 text-warm-beige/55' : 'border-terracotta/10 text-mocha-800/55'}`}>
        Valores ilustrativos. O resultado real depende de agenda, prática, posicionamento e consistência comercial.
      </p>
    </article>
  )
}

export default function Earnings() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-warm-cream studio-edge-light studio-hairline overflow-hidden">
      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Visão de futuro</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
            Um serviço pequeno pode abrir uma agenda grande. ✨
          </h2>
          <p className="reveal-init mt-6 text-deep-brown text-base sm:text-lg leading-relaxed font-medium">
            O design de sobrancelhas é um serviço recorrente. Com técnica, consistência e boa experiência de cliente,
            pode tornar-se uma porta de entrada forte para a área da beleza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
          <EarningsCard amount={945} procedures={3} />
          <EarningsCard amount={1575} procedures={5} accent />
        </div>
      </div>
    </section>
  )
}
