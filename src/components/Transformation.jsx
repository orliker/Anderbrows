import { TRANSFORMATION } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Transformation() {
  const ref = useReveal({ delayBetween: 80 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-chocolate">
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta-soft">Antes e depois</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream leading-tight">
              {TRANSFORMATION.title}
            </h2>
          </div>
          <p className="reveal-init lg:col-span-5 text-warm-beige/75 text-base sm:text-lg leading-relaxed font-medium">
            {TRANSFORMATION.subtitle}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {TRANSFORMATION.items.map((item) => (
            <article key={item.image} className="reveal-init group">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-rich-black shadow-card border border-white/10">
                <img
                  src={item.image}
                  alt={`${item.label} - antes e depois`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  style={{ objectPosition: 'center center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rich-black/78 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="rounded-full bg-rich-black/70 border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-widest2 text-warm-beige font-bold backdrop-blur-md">
                    Antes
                  </span>
                  <span className="rounded-full bg-terracotta/95 border border-white/20 px-3 py-1.5 text-[9px] uppercase tracking-widest2 text-white font-bold backdrop-blur-md">
                    Depois
                  </span>
                </div>
                <div className="absolute left-5 right-5 bottom-5">
                  <h3 className="font-display text-2xl text-white leading-tight">{item.label}</h3>
                  <p className="mt-2 text-sm text-warm-beige/80 leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
