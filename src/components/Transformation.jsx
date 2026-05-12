import { TRANSFORMATION } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Transformation() {
  const ref = useReveal({ delayBetween: 80 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28" style={{ background: '#1A100B' }}>
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(196,95,50,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Antes e Depois</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream">
            {TRANSFORMATION.title}
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/70 text-base sm:text-lg leading-relaxed font-medium">
            {TRANSFORMATION.subtitle}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-8 lg:gap-12">
          {TRANSFORMATION.items.map((item, i) => (
            <div key={i} className="reveal-init group">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-terracotta/25 group-hover:border-terracotta/60 transition-all duration-700"
                style={{ background: '#120D09' }}
              >
                {/* Before / After split */}
                <div className="absolute inset-0 grid grid-cols-2">
                  {/* Before Side */}
                  <div className="relative overflow-hidden border-r border-terracotta/20"
                    style={{ background: 'linear-gradient(135deg, #2A1810, #1A100B)' }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
                      <div className="w-10 h-10 rounded-xl border border-warm-beige/20 flex items-center justify-center bg-warm-beige/5">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-warm-beige/40" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-warm-beige/30 text-xs italic font-medium text-center">
                        Imagem a adicionar
                      </span>
                    </div>
                    {/* Label */}
                    <div className="absolute top-5 left-5 bg-rich-black/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest text-warm-beige font-bold shadow-md">
                      {item.beforeText}
                    </div>
                  </div>

                  {/* After Side */}
                  <div className="relative overflow-hidden"
                    style={{ background: 'linear-gradient(225deg, #2A1810, #1A100B)' }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
                      <div className="w-10 h-10 rounded-xl border border-terracotta/40 flex items-center justify-center bg-terracotta/10">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-terracotta/70" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-terracotta-soft/60 text-xs italic font-medium text-center">
                        Imagem a adicionar
                      </span>
                    </div>
                    {/* Label */}
                    <div className="absolute top-5 right-5 bg-terracotta/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest text-white font-bold shadow-md">
                      {item.afterText}
                    </div>
                  </div>
                </div>

                {/* Center divider icon */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-xl border border-terracotta/50"
                    style={{ background: '#120D09' }}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M13 17l5-5-5-5M6 17l5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-init">
          <p className="text-terracotta/70 italic text-sm font-bold">
            ♡ Resultados reais obtidos através da aplicação rigorosa do método Anderbrows.
          </p>
        </div>
      </div>
    </section>
  )
}
