import { TRAINERS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

/*
 * Uander: chocolate profundo #1A100B — autoridade, escuro
 * Joana:  chocolate cálido  #2E1A0F — feminino, mais claro mas coerente
 * Ambas: sistema visual único, sem branco
 */
const CARD_CONFIG = [
  {
    bg: '#1A100B',
    border: 'rgba(196,95,50,0.35)',
    overlayGrad: 'linear-gradient(to top, #1A100B 0%, rgba(26,16,11,0.30) 45%, transparent 70%)',
    badgeBg: 'rgba(196,95,50,0.85)',
    badgeBorder: 'rgba(196,95,50,0.50)',
    badgeText: '#ffffff',
    badgeDot: 'bg-white',
    roleColor: '#C45F32',
    nameColor: '#F6ECDD',
    bioColor: 'rgba(234,219,200,0.80)',
    lineColor: 'rgba(196,95,50,0.50)',
    tagColor: 'rgba(234,219,200,0.35)',
    accentOrb: 'rgba(196,95,50,0.12)',
  },
  {
    bg: '#2E1A0F',
    border: 'rgba(200,154,75,0.30)',
    overlayGrad: 'linear-gradient(to top, #2E1A0F 0%, rgba(46,26,15,0.30) 45%, transparent 70%)',
    badgeBg: 'rgba(200,154,75,0.80)',
    badgeBorder: 'rgba(200,154,75,0.50)',
    badgeText: '#120D09',
    badgeDot: 'bg-rich-black',
    roleColor: '#E1B96B',
    nameColor: '#F6ECDD',
    bioColor: 'rgba(234,219,200,0.78)',
    lineColor: 'rgba(200,154,75,0.45)',
    tagColor: 'rgba(234,219,200,0.30)',
    accentOrb: 'rgba(200,154,75,0.10)',
  },
]

export default function Trainers() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section id="formadores" ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#F3EEE6' }}>
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
      {/* Warm glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-terracotta/6 blur-[80px] pointer-events-none" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow text-terracotta">A Nossa Equipa ♡</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            Aprenda com quem é <em className="not-italic italic text-terracotta">referência</em>.
          </h2>
          <p className="reveal-init mt-5 max-w-xl text-deep-brown/75 text-base sm:text-lg leading-relaxed font-medium">
            Profissionais com anos de experiência no mercado de beleza, formação e técnica avançada.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 mt-12 sm:mt-16">
          {TRAINERS.map((t, i) => {
            const c = CARD_CONFIG[i]
            return (
              <article
                key={t.name}
                className={`reveal-init group relative rounded-[40px] overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 shadow-xl ${
                  i === 0 ? 'sm:-translate-y-4' : ''
                }`}
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
              >
                {/* Ambient orb inside card */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: c.accentOrb }}
                />

                {/* Photo area */}
                <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden" style={{ background: '#120D09' }}>
                  <img
                    src={t.image}
                    alt={`Retrato de ${t.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                    style={{ objectPosition: 'center top' }}
                  />
                  {/* Dark gradient — same system for both, NO white overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: c.overlayGrad }}
                  />

                  {/* Role badge */}
                  <div
                    className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md text-[10px] uppercase tracking-widest2 font-bold flex items-center gap-2 shadow-md"
                    style={{
                      background: c.badgeBg,
                      border: `1px solid ${c.badgeBorder}`,
                      color: c.badgeText,
                    }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${c.badgeDot}`} />
                    {i === 0 ? 'Formador Principal' : 'Formadora'}
                  </div>

                  {/* Subtle bottom shimmer line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(to right, transparent, ${c.lineColor}, transparent)` }}
                  />
                </div>

                {/* Content */}
                <div className="px-8 pb-10 pt-6 sm:px-10 relative z-10">
                  <div
                    className="text-[10px] uppercase tracking-widest2 font-bold"
                    style={{ color: c.roleColor }}
                  >
                    {t.role}
                  </div>
                  <h3
                    className="font-display text-3xl lg:text-4xl leading-tight mt-3"
                    style={{ color: c.nameColor }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="mt-5 text-base leading-relaxed font-medium"
                    style={{ color: c.bioColor }}
                  >
                    {t.bio}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-px" style={{ background: c.lineColor }} />
                    <span
                      className="text-[10px] uppercase tracking-widest2 font-bold"
                      style={{ color: c.tagColor }}
                    >
                      Anderbrows Beauty ✦
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
