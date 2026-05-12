import { useState } from 'react'
import { FAQ_ITEMS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FAQ() {
  const ref = useReveal({ delayBetween: 80 })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" ref={ref} className="relative py-20 sm:py-28 bg-off-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Intro */}
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Perguntas Frequentes</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
              Tudo o que precisa <em className="not-italic italic gold-text">saber</em> antes de começar.
            </h2>
            <p className="reveal-init mt-6 text-mocha-800/80 text-base sm:text-lg leading-relaxed font-medium">
              Esclareça as suas dúvidas sobre a formação, o kit e o acompanhamento pós-curso. 
              Se precisar de mais detalhes, estamos sempre disponíveis.
            </p>
            
            <div className="reveal-init mt-10">
              <div className="inline-flex items-center gap-4 p-4 rounded-3xl bg-warm-cream border border-warm-beige shadow-sm">
                <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-white">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-deep-brown">Ainda tem dúvidas?</div>
                  <div className="text-xs text-mocha-800/70">Fale connosco no WhatsApp ♡</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`reveal-init rounded-[24px] border transition-all duration-500 overflow-hidden ${
                    isOpen ? 'border-terracotta/30 bg-warm-cream shadow-soft' : 'border-warm-beige bg-white hover:border-terracotta/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
                  >
                    <span className={`text-base sm:text-lg font-display font-bold pr-8 transition-colors ${isOpen ? 'text-terracotta' : 'text-rich-black'}`}>
                      {item.q}
                    </span>
                    <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 bg-terracotta border-terracotta text-white' : 'border-warm-beige bg-off-white text-terracotta'}`}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-6 sm:p-8 pt-0 text-sm sm:text-base text-deep-brown/80 leading-relaxed font-medium">
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
