import { TRAINERS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Trainers() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section id="formadores" ref={ref} className="relative py-16 sm:py-24 bg-warm-cream studio-edge-light studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow text-terracotta">Formadores</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            Aprenda com quem vive a técnica todos os dias.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-7 sm:gap-10 mt-12 sm:mt-16">
          {TRAINERS.map((t, i) => (
            <article
              key={t.name}
              className={`reveal-init group relative rounded-[28px] overflow-hidden transition-all duration-700 ${
                i === 0
                  ? 'bg-chocolate text-warm-cream sm:-translate-y-4 shadow-2xl border border-terracotta/20'
                  : 'bg-white border border-warm-beige text-deep-brown shadow-lg'
              } hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="image-glint relative w-full h-[340px] sm:h-[420px] overflow-hidden bg-warm-beige">
                <img
                  src={t.image}
                  alt={`Retrato de ${t.name}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover brightness-[1.45] contrast-[1.03] saturate-[1.06] transition-transform duration-1000 group-hover:scale-[1.04]"
                  style={{ objectPosition: 'center 38%' }}
                />
                <div
                  className={`absolute top-5 left-5 px-4 py-2 rounded-full backdrop-blur-md border ${
                    i === 0 ? 'bg-terracotta/80 border-terracotta text-white' : 'bg-white/90 border-white text-terracotta'
                  } text-[10px] uppercase tracking-widest2 font-bold`}
                >
                  {i === 0 ? 'Formador principal' : 'Formadora'}
                </div>
              </div>

              <div className="px-7 pb-9 pt-6 sm:px-9">
                <div className={`text-[10px] uppercase tracking-widest2 font-bold ${i === 0 ? 'text-gold-light' : 'text-terracotta'}`}>
                  {t.role}
                </div>
                <h3 className="font-display text-3xl lg:text-4xl leading-tight mt-3">{t.name}</h3>
                <p className={`mt-5 text-base leading-relaxed ${i === 0 ? 'text-warm-beige/80' : 'text-mocha-800'} font-medium`}>
                  {t.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
