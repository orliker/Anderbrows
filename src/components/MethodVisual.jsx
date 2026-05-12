import { useReveal } from '../hooks/useReveal.js'

const PILLARS = [
  { k: 'Visagismo', d: 'Mapeamento facial personalizado' },
  { k: 'Design técnico', d: 'Linha e paquímetro · Método Anderbrows' },
  { k: 'Henna & Coloração', d: 'Aplicação correta para resultado natural' },
]

export default function MethodVisual() {
  const ref = useReveal({ delayBetween: 110 })

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 lg:py-32 bg-deep-brown overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT — editorial photo */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative max-w-[640px] mx-auto lg:mx-0">
              {/* Outer frame */}
              <div className="absolute -inset-4 rounded-[40px] border border-terracotta/20 pointer-events-none" />

              {/* Main image */}
              <div className="reveal-init relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl border border-terracotta/20 bg-rich-black">
                <img
                  src="/images/anderbrows/brow-design-closeup-01.png"
                  alt="Comparação antes e depois — método Anderbrows"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />

                {/* Fixed Overlays for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-rich-black/80 via-rich-black/20 to-terracotta/20 pointer-events-none" />
                <div className="absolute left-1/2 top-10 bottom-10 w-px bg-white/20 backdrop-blur pointer-events-none" />

                {/* Corner labels */}
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-rich-black/60 border border-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest2 text-warm-beige font-bold shadow-md">
                  Antes
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-terracotta/90 backdrop-blur-md text-[10px] uppercase tracking-widest2 text-white font-bold shadow-md">
                  Depois ✨
                </div>

                {/* Bottom caption */}
                <div className="absolute left-0 right-0 bottom-0 p-6 bg-gradient-to-t from-rich-black via-rich-black/60 to-transparent">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest2 text-warm-beige/90 font-bold">
                    <span>Resultado · Método Anderbrows</span>
                    <span>2026</span>
                  </div>
                </div>
              </div>

              {/* Floating accent chip */}
              <div className="reveal-init absolute -top-4 -right-4 px-5 py-3 rounded-full bg-chocolate text-warm-cream shadow-xl text-[10px] uppercase tracking-widest2 flex items-center gap-2 font-bold border border-terracotta/20">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                Casos reais
              </div>
            </div>
          </div>

          {/* RIGHT — text content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta-soft">O método em ação</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-white">
              Técnica, <em className="not-italic italic text-terracotta">estética</em> e precisão facial.
            </h2>
            <p className="reveal-init mt-8 text-warm-beige/80 text-base sm:text-lg leading-relaxed font-medium">
              O design Anderbrows nasce do equilíbrio entre a anatomia do rosto e a sensibilidade estética. 
              Cada traço é pensado para realçar a beleza natural com elegância. ♡
            </p>

            <ul className="reveal-init mt-10 space-y-6">
              {PILLARS.map((p) => (
                <li key={p.k} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-lg bg-terracotta/15 text-terracotta-soft flex items-center justify-center shrink-0 border border-terracotta/20">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-xl text-warm-cream leading-tight font-bold">
                      {p.k}
                    </div>
                    <div className="text-sm text-warm-beige/60 mt-1 font-medium">{p.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
