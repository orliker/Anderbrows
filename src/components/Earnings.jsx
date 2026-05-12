import { useCountUp, useReveal } from '../hooks/useReveal.js'

function EarningsCard({ amount, procedures, accent }) {
  const ref = useCountUp(amount)
  return (
    <article
      className={`reveal-init group relative rounded-[40px] p-8 sm:p-12 transition-all duration-700 hover:-translate-y-2 shadow-xl overflow-hidden ${
        accent ? '' : ''
      }`}
      style={{
        background: accent ? '#2A1810' : '#1A100B',
        border: accent ? '1px solid rgba(196,95,50,0.40)' : '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {accent && (
        <div className="absolute -top-4 right-10 bg-terracotta text-white text-[10px] uppercase tracking-widest2 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Cenário de crescimento ✦
        </div>
      )}

      {/* Warm glow */}
      {accent && (
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-terracotta/10 blur-[60px] pointer-events-none" />
      )}

      <div className={`text-[10px] uppercase tracking-widest2 font-bold ${accent ? 'text-terracotta-soft' : 'text-terracotta/70'}`}>
        {procedures} atendimentos / dia · 21 dias
      </div>

      <div className="mt-8 flex items-baseline gap-3">
        <span className={`font-display text-7xl sm:text-8xl leading-none ${accent ? 'gold-text' : 'text-warm-cream'}`}>
          <span ref={ref}>0</span>
        </span>
        <span className={`font-display text-4xl ${accent ? 'text-terracotta-soft' : 'text-terracotta/50'}`}>€</span>
      </div>

      <p className="mt-6 text-base leading-relaxed font-medium text-warm-beige/70">
        Potencial de faturação mensal estimado com {procedures} atendimentos diários.
      </p>

      <div
        className="mt-10 pt-8 grid grid-cols-2 gap-8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div>
          <div className="text-[10px] uppercase tracking-widest text-warm-beige/35 font-bold">Investimento / serviço</div>
          <div className="mt-2 text-xl font-display text-warm-cream">15€</div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-warm-beige/35 font-bold">Tempo médio</div>
          <div className="mt-2 text-xl font-display text-warm-cream">45 min</div>
        </div>
      </div>
    </article>
  )
}

export default function Earnings() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section ref={ref} className="relative py-20 sm:py-32 overflow-hidden" style={{ background: '#120D09' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(196,95,50,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-terracotta/8 blur-[100px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Visão de Futuro ✨</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight text-warm-cream">
            Potencial de <em className="not-italic italic gold-text">crescimento</em> profissional.
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/65 text-base sm:text-lg leading-relaxed font-medium">
            O design de sobrancelhas é um serviço de alta procura e fidelização.
            Uma vez construída a sua carteira de clientes, a recorrência garante estabilidade. ♡
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <EarningsCard amount={945} procedures={3} />
          <EarningsCard amount={1575} procedures={5} accent />
        </div>

        <div className="reveal-init mt-16 text-center">
          <p className="text-[11px] text-warm-beige/25 uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            * Valores ilustrativos baseados numa estimativa de 21 dias úteis.
            O crescimento depende exclusivamente da sua prática, agenda e dedicação.
          </p>
        </div>
      </div>
    </section>
  )
}
