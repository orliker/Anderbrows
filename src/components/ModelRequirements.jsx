import { useReveal } from '../hooks/useReveal.js'

const REQUIREMENTS = [
  {
    n: '01',
    t: 'Sem procedimentos prévios',
    d: 'A modelo não pode ter microblading, nanoblading ou micropigmentação nas sobrancelhas.',
    icon: '✦',
  },
  {
    n: '02',
    t: 'Não gestante ou lactante',
    d: 'Por questões de segurança, a modelo não pode estar grávida nem em período de amamentação.',
    icon: '♡',
  },
  {
    n: '03',
    t: 'Maior de idade',
    d: 'A modelo deve ter 18 anos ou mais à data da formação.',
    icon: '✨',
  },
]

export default function ModelRequirements() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    /* Warm dark section — well contrasted */
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#2A1810' }}>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-terracotta/8 blur-[100px] pointer-events-none" />

      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left text */}
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Sobre a modelo ♡</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-warm-cream">
              A prática é em modelo <em className="not-italic italic gold-text">real</em>.
            </h2>
            <p className="reveal-init mt-6 text-warm-beige/70 text-base leading-relaxed font-medium">
              A formanda traz a sua modelo para a parte prática da formação.{' '}
              <strong className="text-warm-cream">A modelo é da inteira responsabilidade da formanda.</strong>{' '}
              A prática é realizada no período da tarde, em horário a ser comunicado.
            </p>

            {/* Security badge */}
            <div className="reveal-init mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-terracotta/25"
              style={{ background: '#1A100B' }}
            >
              <div className="w-10 h-10 rounded-full bg-terracotta/15 border border-terracotta/30 flex items-center justify-center text-terracotta">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-warm-cream uppercase tracking-widest">Critérios de segurança</div>
                <div className="text-[10px] text-warm-beige/50 mt-0.5">Para um procedimento seguro e profissional</div>
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
            {REQUIREMENTS.map((r) => (
              <article
                key={r.n}
                className="reveal-init group relative rounded-[32px] border border-terracotta/20 p-7 hover:border-terracotta/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                style={{ background: '#1A100B' }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta/0 to-terracotta/0 group-hover:from-terracotta/5 transition-all duration-700 rounded-[32px] pointer-events-none" />

                <div className="flex items-center justify-between mb-8 relative">
                  <span className="text-[10px] font-bold uppercase tracking-widest2 text-terracotta bg-terracotta/12 px-3 py-1 rounded-full border border-terracotta/20">
                    {r.n}
                  </span>
                  <span className="text-warm-beige/25 group-hover:text-terracotta/60 transition-colors duration-400 text-lg select-none">
                    {r.icon}
                  </span>
                </div>
                <h3 className="font-display text-xl text-warm-cream leading-tight relative">{r.t}</h3>
                <p className="mt-4 text-xs text-warm-beige/60 leading-relaxed relative">{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
