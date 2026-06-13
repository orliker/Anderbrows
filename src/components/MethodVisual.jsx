import { useReveal } from '../hooks/useReveal.js'

const PILLARS = [
  { k: 'Visagismo', d: 'Mapeamento facial personalizado' },
  { k: 'Design técnico', d: 'Linha e paquímetro · Método Anderbrows' },
  { k: 'Henna & Coloração', d: 'Aplicação correta para resultado natural' },
]

export default function MethodVisual() {
  const ref = useReveal({ delayBetween: 110 })

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-deep-brown studio-edge-dark studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="reveal-init relative max-w-[660px] mx-auto lg:mx-0">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-terracotta/20 bg-rich-black p-7 sm:p-10">
                <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold">
                    Método Anderbrows
                  </div>
                  <div className="mt-4 font-display text-4xl sm:text-5xl text-white leading-none">
                    Técnica ensinada de perto
                  </div>

                  <div className="mt-10 grid gap-4">
                    {['Leitura facial', 'Marcação técnica', 'Aplicação guiada', 'Finalização limpa'].map((step, index) => (
                      <div key={step} className="flex items-center gap-5 rounded-[18px] border border-white/10 bg-white/[0.04] px-5 py-4">
                        <span className="font-display text-2xl text-terracotta-soft">
                          0{index + 1}
                        </span>
                        <span className="text-sm sm:text-base text-warm-cream font-semibold">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta-soft">O método em ação</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-white">
              Técnica, <em className="not-italic italic text-terracotta">estética</em> e precisão facial.
            </h2>
            <p className="reveal-init mt-8 text-warm-beige/80 text-base sm:text-lg leading-relaxed font-medium">
              O design Anderbrows nasce do equilíbrio entre a anatomia do rosto e a sensibilidade estética.
              Cada traço é pensado para realçar a beleza natural com elegância.
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
