import { useCountUp, useReveal } from '../hooks/useReveal.js'

function EarningsCard({ amount, procedures, accent }) {
  const ref = useCountUp(amount)
  return (
    <article
      className={`reveal-init relative rounded-[40px] p-8 sm:p-12 transition-all duration-700 hover:-translate-y-2 ${
        accent
          ? 'bg-chocolate text-warm-cream shadow-2xl border border-terracotta/20'
          : 'bg-white border border-warm-beige hover:border-terracotta/40'
      }`}
    >
      {accent && (
        <div className="absolute -top-4 right-10 px-4 py-2 rounded-full bg-gradient-to-r from-terracotta to-terracotta-soft text-white text-[10px] uppercase tracking-widest2 font-bold shadow-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Cenário de crescimento
        </div>
      )}

      <div className={`text-[10px] uppercase tracking-widest2 font-bold ${accent ? 'text-terracotta-soft' : 'text-terracotta'}`}>
        {procedures} atendimentos / dia · 21 dias
      </div>

      <div className="mt-8 flex items-baseline gap-3">
        <span className={`font-display text-7xl sm:text-8xl leading-none ${accent ? 'gold-text' : 'text-rich-black'}`}>
          <span ref={ref}>0</span>
        </span>
        <span className={`font-display text-4xl ${accent ? 'text-terracotta-soft' : 'text-terracotta/50'}`}>€</span>
      </div>

      <p className={`mt-6 text-base leading-relaxed font-medium ${accent ? 'text-warm-beige/80' : 'text-deep-brown'}`}>
        Potencial de faturação mensal estimado com {procedures} atendimentos diários.
      </p>

      <div className={`mt-10 pt-8 border-t ${accent ? 'border-white/10' : 'border-terracotta/10'} grid grid-cols-2 gap-8`}>
        <div>
          <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Investimento / serviço</div>
          <div className={`mt-2 text-xl font-display ${accent ? 'text-white' : 'text-rich-black'}`}>15€</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Tempo médio</div>
          <div className={`mt-2 text-xl font-display ${accent ? 'text-white' : 'text-rich-black'}`}>45 min</div>
        </div>
      </div>
    </article>
  )
}

export default function Earnings() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section ref={ref} className="relative py-20 sm:py-32 bg-warm-cream overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(217,121,74,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Visão de Futuro</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight text-rich-black">
            Potencial de <em className="not-italic italic gold-text">crescimento</em> profissional.
          </h2>
          <p className="reveal-init mt-6 text-deep-brown text-base sm:text-lg leading-relaxed font-medium">
            O design de sobrancelhas é um serviço de alta procura e fidelização. 
            Uma vez construída a sua carteira de clientes, a recorrência garante estabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <EarningsCard amount={945} procedures={3} />
          <EarningsCard amount={1575} procedures={5} accent />
        </div>

        <div className="reveal-init mt-16 text-center">
           <p className="text-[11px] text-mocha-800/50 uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            * Valores ilustrativos baseados numa estimativa de 21 dias úteis. 
            O crescimento depende exclusivamente da sua prática, agenda e dedicação.
           </p>
        </div>
      </div>
    </section>
  )
}
