import { TESTIMONIALS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Testimonials() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section id="testemunhos" ref={ref} className="relative py-20 sm:py-28 bg-warm-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Depoimentos</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            O que dizem as nossas <em className="not-italic italic gold-text">formandas</em> ♡
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="reveal-init relative bg-white/80 backdrop-blur p-8 rounded-[32px] border border-terracotta/10 shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col group"
            >
              {/* Decorative sparkle */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gold-warm">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2l2.4 7.6 8 1-6 5.8 1.8 7.6-7.2-4.2-7.2 4.2 1.8-7.6-6-5.8 8-1z" opacity="0.3"/>
                  <path d="M12 5l1.6 5.1 5.4.7-4 3.9 1.2 5.1-4.8-2.8-4.8 2.8 1.2-5.1-4-3.9 5.4-.7z"/>
                </svg>
              </div>

              <div className="flex gap-1 mb-6 text-gold-warm">
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
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-terracotta to-terracotta-soft flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold text-rich-black">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-terracotta/70 font-bold">Formanda Anderbrows</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal-init">
          <a 
            href="https://www.google.com/search?q=anderbrows+academy+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-terracotta/20 text-terracotta font-bold text-xs uppercase tracking-widest group shadow-sm hover:shadow-md transition-all"
          >
            Ver todas as avaliações no Google
            <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
