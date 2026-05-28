import { TESTIMONIALS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Testimonials() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section id="testemunhos" ref={ref} className="relative py-16 sm:py-24 bg-warm-cream studio-edge-light studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
          <div className="reveal-init">
              <span className="eyebrow text-terracotta">Depoimentos reais</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            O que as formandas levam da experiência.
          </h2>
        </div>
          <p className="reveal-init lg:col-span-5 text-deep-brown/78 text-base sm:text-lg leading-relaxed font-medium">
            Avaliações reais de alunas e clientes que sentiram de perto o método, a energia da equipa e o acompanhamento da Anderbrows.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.text}
              className={`reveal-init relative overflow-hidden rounded-[24px] border shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col ${
                index === 0
                  ? 'lg:col-span-6 bg-chocolate text-warm-cream border-terracotta/20 p-8 sm:p-9'
                  : 'lg:col-span-6 bg-off-white/90 backdrop-blur border-terracotta/12 p-7 sm:p-8'
              }`}
            >
              {index === 0 && <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />}

              <div className="relative flex items-start justify-between gap-5 mb-6">
                <div>
                  <div className={`text-sm font-bold ${index === 0 ? 'text-white' : 'text-rich-black'}`}>
                    {t.name}
                  </div>
                  <div className={`mt-1 text-[10px] uppercase tracking-widest2 font-bold ${index === 0 ? 'text-terracotta-soft' : 'text-terracotta/75'}`}>
                    {t.meta}
                  </div>
                </div>

                <div className="flex gap-1 text-gold-warm shrink-0" aria-label={`${t.stars} estrelas`}>
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className={`relative font-medium leading-relaxed flex-grow ${index === 0 ? 'text-warm-beige/88 text-base sm:text-lg' : 'text-deep-brown/82 text-sm sm:text-base'}`}>
                “{t.text}”
              </p>

              <div className={`relative mt-7 pt-5 border-t text-[10px] uppercase tracking-widest2 font-bold ${index === 0 ? 'border-white/10 text-warm-beige/50' : 'border-terracotta/10 text-terracotta/70'}`}>
                Formação Anderbrows
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
