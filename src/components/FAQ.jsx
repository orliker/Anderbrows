import { useState } from 'react'
import { FAQ_ITEMS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FAQ() {
  const ref = useReveal({ delayBetween: 80 })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" ref={ref} className="relative py-16 sm:py-24 bg-warm-cream studio-edge-light studio-hairline overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Perguntas frequentes</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
              Tudo claro antes de reservar a vaga.
            </h2>
            <p className="reveal-init mt-6 text-mocha-800/80 text-base sm:text-lg leading-relaxed font-medium">
              Reunimos as dúvidas mais comuns sobre a formação, kit, modelo e inscrição.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={item.q}
                  className={`reveal-init rounded-[20px] border transition-all duration-500 overflow-hidden ${
                    isOpen ? 'border-terracotta/30 bg-warm-cream shadow-soft' : 'border-warm-beige bg-white hover:border-terracotta/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left"
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

                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="p-6 sm:p-7 pt-0 text-sm sm:text-base text-deep-brown/80 leading-relaxed font-medium">
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
