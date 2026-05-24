import { TESTIMONIALS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Testimonials() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section id="testemunhos" ref={ref} className="relative py-20 sm:py-28 bg-warm-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Depoimentos</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            O que as formandas levam da experiência.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.text}
              className="reveal-init relative bg-white/85 backdrop-blur p-7 rounded-[24px] border border-terracotta/10 shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex gap-1 mb-6 text-gold-warm" aria-label={`${t.stars} estrelas`}>
                {[...Array(t.stars)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-deep-brown text-sm leading-relaxed mb-8 flex-grow font-medium">
                “{t.text}”
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-terracotta/10">
                <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center text-white font-bold text-xs shadow-md">
                  A
                </div>
                <div>
                  <div className="text-sm font-bold text-rich-black">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-terracotta/70 font-bold">
                    Formação Anderbrows
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
