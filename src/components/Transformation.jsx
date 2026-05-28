import { TRANSFORMATION } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Transformation() {
  const ref = useReveal({ delayBetween: 80 })

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-chocolate studio-edge-dark studio-hairline overflow-hidden">
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

        <div className="mt-10 sm:mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {TRANSFORMATION.items.map((item) => (
            <article key={item.image} className="reveal-init group">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-rich-black shadow-card border border-white/10">
                <img
                  src={item.image}
                  alt={`${item.label} - resultado técnico de sobrancelhas`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  style={{ objectPosition: 'center center' }}
                />
                <div className="absolute left-0 right-0 top-1/2 h-px bg-warm-cream/45 shadow-[0_0_22px_rgba(255,243,226,0.28)] pointer-events-none" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
