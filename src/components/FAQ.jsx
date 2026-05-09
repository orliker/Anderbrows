import { useState } from 'react'
import { FAQ_ITEMS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FAQ() {
  const ref = useReveal({ delayBetween: 60 })
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" ref={ref} className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="reveal-init">
              <span className="eyebrow">Perguntas frequentes</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl">
              Tudo o que precisa de saber antes de se inscrever.
            </h2>
            <p className="reveal-init mt-5 text-mocha-700 leading-relaxed">
              Não encontra a sua resposta? Fale connosco diretamente via WhatsApp — respondemos sempre.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {FAQ_ITEMS.map((f, i) => {
                const open = i === openIdx
                return (
                  <div
                    key={f.q}
                    className={`reveal-init rounded-2xl border bg-white transition-colors ${
                      open ? 'border-champagne-500/40' : 'border-cream-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-display text-lg sm:text-xl text-mocha-900 leading-snug">
                        {f.q}
                      </span>
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
                          open ? 'bg-mocha-900 text-cream-50 rotate-45' : 'bg-cream-100 text-mocha-900'
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm sm:text-base text-mocha-700 leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
