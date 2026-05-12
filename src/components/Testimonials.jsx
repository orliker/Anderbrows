import { TESTIMONIALS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Testimonials() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section id="testemunhos" ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#F3EEE6' }}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-terracotta/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gold-warm/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Depoimentos ♡</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            O que dizem as nossas <em className="not-italic italic gold-text">formandas</em>
          </h2>
          <p className="reveal-init mt-5 text-deep-brown/70 text-base leading-relaxed font-medium">
            Experiências reais de quem já viveu a formação Anderbrows. ✨
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="reveal-init relative p-7 sm:p-8 rounded-[32px] border border-[#E0D5C8] flex flex-col group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-terracotta/30 shadow-sm overflow-hidden"
              style={{ background: '#FFFFFF' }}
            >
              {/* Subtle warm glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-terracotta/0 group-hover:bg-terracotta/4 blur-[40px] transition-all duration-700 pointer-events-none" />

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-gold-warm">
                {[...Array(t.stars)].map((_, si) => (
                  <svg key={si} viewBox="0 0 24 24" className="w-4 h-4 fill-current transition-transform duration-200" style={{ transitionDelay: `${si * 50}ms` }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-terracotta/15 font-display text-5xl leading-none mb-2 select-none">"</div>

              <p className="text-deep-brown text-sm leading-relaxed mb-8 flex-grow font-medium relative">
                {t.text}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-[#EADBC8]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-terracotta to-terracotta-soft flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold text-rich-black leading-tight">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-terracotta font-bold mt-0.5">Formanda Anderbrows ✦</div>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-terracotta/25 text-terracotta font-bold text-xs uppercase tracking-widest group shadow-sm hover:shadow-md hover:border-terracotta/60 hover:bg-terracotta/5 transition-all duration-300"
            style={{ background: '#FFFFFF' }}
          >
            Ver todas as avaliações no Google
            <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
