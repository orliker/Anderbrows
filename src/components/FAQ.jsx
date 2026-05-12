import { useState } from 'react'
import { FAQ_ITEMS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'
import { WHATSAPP_URL } from '../constants/content.js'

export default function FAQ() {
  const ref = useReveal({ delayBetween: 80 })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    /* Dark section — great contrast, feels premium */
    <section id="faq" ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#1A100B' }}>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-terracotta/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-warm/6 blur-[100px] pointer-events-none" />

      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Intro */}
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Perguntas Frequentes ✦</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-warm-cream">
              Tudo o que precisa <em className="not-italic italic gold-text">saber</em> antes de começar.
            </h2>
            <p className="reveal-init mt-6 text-warm-beige/65 text-base sm:text-lg leading-relaxed font-medium">
              Esclareça as suas dúvidas sobre a formação, o kit e o acompanhamento pós-curso.
              Se precisar de mais detalhes, estamos sempre disponíveis. ♡
            </p>

            {/* WhatsApp CTA box */}
            <div className="reveal-init mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 p-5 rounded-3xl border border-terracotta/25 hover:border-terracotta/60 transition-all duration-400 group hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: '#2A1810' }}
              >
                <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-warm-cream">Ainda tem dúvidas?</div>
                  <div className="text-xs text-warm-beige/55 mt-0.5">Fale connosco no WhatsApp ♡</div>
                </div>
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-terracotta/60 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`reveal-init rounded-[24px] border transition-all duration-400 overflow-hidden ${
                    isOpen
                      ? 'border-terracotta/40 shadow-lg'
                      : 'border-white/8 hover:border-terracotta/25'
                  }`}
                  style={{ background: isOpen ? '#2A1810' : 'rgba(255,255,255,0.03)' }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
                  >
                    <span className={`text-base sm:text-lg font-display font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-terracotta-soft' : 'text-warm-cream group-hover:text-terracotta/80'}`}>
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-400 ${
                        isOpen
                          ? 'bg-terracotta border-terracotta text-white rotate-180'
                          : 'border-white/20 bg-white/5 text-terracotta/60 group-hover:border-terracotta/40'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-400 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 text-sm sm:text-base text-warm-beige/75 leading-relaxed font-medium">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
