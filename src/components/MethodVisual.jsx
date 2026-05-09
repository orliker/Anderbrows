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
      className="relative py-16 sm:py-24 lg:py-28 bg-cream-100/60 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-champagne-400/15 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — editorial photo */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative max-w-[640px] mx-auto lg:mx-0">
              {/* Outer gold frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-champagne-500/25 pointer-events-none" />

              {/* Main image — proper aspect that respects the original photo */}
              <div className="reveal-init relative w-full aspect-[16/10] sm:aspect-[3/2] rounded-2xl overflow-hidden shadow-soft border border-cream-200 bg-cream-100">
                <img
                  src="/images/anderbrows/brow-design-closeup-01.png"
                  alt="Comparação antes e depois — método Anderbrows"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />

                {/* Subtle warm overlay for cohesion with the page palette */}
                <div className="absolute inset-0 bg-gradient-to-tr from-mocha-900/10 via-transparent to-champagne-400/10 mix-blend-multiply pointer-events-none" />

                {/* Inner ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-mocha-900/5 rounded-2xl pointer-events-none" />

                {/* Vertical center line — subtle "before/after" divider */}
                <div className="absolute left-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-cream-50/60 to-transparent pointer-events-none" />

                {/* Corner labels */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream-50/90 backdrop-blur text-[9px] uppercase tracking-widest2 text-mocha-900">
                  Antes
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-mocha-900/90 backdrop-blur text-[9px] uppercase tracking-widest2 text-cream-50">
                  Depois
                </div>

                {/* Bottom caption */}
                <div className="absolute left-0 right-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-mocha-900/70 via-mocha-900/20 to-transparent">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest2 text-cream-50/90">
                    <span>Resultado · Método Anderbrows</span>
                    <span>Porto · 2026</span>
                  </div>
                </div>
              </div>

              {/* Floating accent chip */}
              <div className="reveal-init absolute -top-3 sm:-top-4 -right-3 sm:-right-4 px-4 py-2 rounded-full bg-mocha-900 text-cream-50 shadow-card text-[10px] uppercase tracking-widest2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
                Resultados reais
              </div>
            </div>
          </div>

          {/* RIGHT — text content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="reveal-init">
              <span className="eyebrow">O método em ação</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.05]">
              Técnica, <em className="not-italic italic gold-text">estética</em> e ciência do rosto.
            </h2>
            <p className="reveal-init mt-5 text-mocha-700 text-base sm:text-lg leading-relaxed">
              O design Anderbrows nasce do equilíbrio entre o estudo do rosto e a precisão técnica.
              Cada sobrancelha é desenhada para realçar a expressão única de cada cliente.
            </p>

            <ul className="reveal-init mt-7 space-y-4">
              {PILLARS.map((p) => (
                <li key={p.k} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gold-grad shrink-0" />
                  <div>
                    <div className="font-display text-lg text-mocha-900 leading-tight">
                      {p.k}
                    </div>
                    <div className="text-sm text-mocha-700/80 mt-0.5">{p.d}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="reveal-init mt-8 flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-mocha-700/70">
              <span className="w-10 h-px bg-champagne-500/60" />
              <span>Pronta para conhecer a equipa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
