import { TRAINERS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Trainers() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section id="formadores" ref={ref} className="relative py-20 sm:py-28 bg-warm-cream">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow text-terracotta">A Nossa Equipa</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            Aprenda com quem é <em className="not-italic italic text-terracotta">referência</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16">
          {TRAINERS.map((t, i) => (
            <article
              key={t.name}
              className={`reveal-init group relative rounded-[40px] overflow-hidden transition-all duration-700 ${
                i === 0 ? 'bg-chocolate text-warm-cream sm:-translate-y-4 shadow-2xl border border-terracotta/20' : 'bg-white border border-warm-beige text-deep-brown shadow-lg'
              } hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Photo */}
              <div className="relative w-full h-[360px] sm:h-[440px] overflow-hidden bg-warm-beige">
                <img
                  src={t.image}
                  alt={`Retrato de ${t.name}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                  style={{ objectPosition: 'center top' }}
                />
                {/* Fixed Overlays: No white washing for Joana, just a subtle dark gradient for text legibility */}
                <div className={`absolute inset-0 bg-gradient-to-t ${i === 0 ? 'from-chocolate via-chocolate/30' : 'from-rich-black/80 via-rich-black/10'} to-transparent pointer-events-none`} />
                
                <div className={`absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md border ${
                  i === 0 ? 'bg-terracotta/80 border-terracotta text-white shadow-md' : 'bg-white/90 border-white text-terracotta shadow-md'
                } text-[10px] uppercase tracking-widest2 font-bold flex items-center gap-2`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white animate-pulse' : 'bg-terracotta'}`} />
                  {i === 0 ? 'Formador Principal' : 'Formadora'}
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 pt-6 sm:px-10">
                <div className={`text-[10px] uppercase tracking-widest2 font-bold ${i === 0 ? 'text-gold-light' : 'text-terracotta'}`}>
                  {t.role}
                </div>
                <h3 className="font-display text-3xl lg:text-4xl leading-tight mt-3">
                  {t.name}
                </h3>
                <p className={`mt-5 text-base leading-relaxed ${i === 0 ? 'text-warm-beige/80' : 'text-mocha-800'} font-medium`}>
                  {t.bio}
                </p>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className={`w-12 h-px ${i === 0 ? 'bg-gold-warm' : 'bg-terracotta'}`} />
                  <span className={`text-[10px] uppercase tracking-widest2 font-bold ${i === 0 ? 'text-warm-beige/50' : 'text-terracotta/70'}`}>
                    Anderbrows Beauty
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
