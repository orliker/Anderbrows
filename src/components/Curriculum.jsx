import { useState } from 'react'
import { CURRICULUM } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Curriculum() {
  const ref = useReveal({ delayBetween: 80, y: 24 })
  const [activeIdx, setActiveIdx] = useState(0)
  const active = CURRICULUM[activeIdx]

  const goPrev = () => setActiveIdx((activeIdx - 1 + CURRICULUM.length) % CURRICULUM.length)
  const goNext = () => setActiveIdx((activeIdx + 1) % CURRICULUM.length)

  return (
    <section id="programa" ref={ref} className="relative py-20 sm:py-28 bg-warm-beige">
      <div className="absolute inset-0 bg-noise opacity-18 pointer-events-none" />
      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Programa</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-rich-black">
            O caminho completo, do desenho à finalização.
          </h2>
          <p className="reveal-init mt-6 text-deep-brown/80 text-base sm:text-lg leading-relaxed font-medium">
            Uma estrutura clara para aprender técnica, treinar o olhar e executar com segurança.
          </p>
        </div>

        <div className="reveal-init grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {CURRICULUM.map((g, i) => {
            const isActive = i === activeIdx
            return (
              <button
                key={g.title}
                onClick={() => setActiveIdx(i)}
                className={`relative p-5 rounded-[20px] border text-left transition-all duration-500 ${
                  isActive
                    ? 'bg-chocolate text-warm-cream border-chocolate shadow-xl scale-[1.02]'
                    : 'bg-warm-cream/80 text-deep-brown border-terracotta/20 hover:border-terracotta/50 hover:bg-warm-cream shadow-sm'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-widest2 mb-3 ${isActive ? 'text-terracotta-soft' : 'text-terracotta'}`}>
                  Módulo 0{i + 1}
                </div>
                <div className="font-display text-lg leading-tight font-bold">{g.title}</div>
              </button>
            )
          })}
        </div>

        <div className="reveal-init relative rounded-[28px] bg-rich-black text-warm-cream p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-terracotta/20">
          <div className="relative">
            <div className="flex items-center justify-between gap-6 flex-wrap mb-9">
              <div>
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold">
                  Conteúdo detalhado
                </div>
                <h3 className="font-display text-3xl sm:text-4xl mt-2 text-white">{active.title}</h3>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  aria-label="Módulo anterior"
                  className="w-12 h-12 rounded-full border border-warm-beige/30 text-warm-beige flex items-center justify-center hover:bg-warm-beige/10 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  aria-label="Próximo módulo"
                  className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center hover:bg-[#B9552A] transition-all shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-9" />

            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
              {active.items.map((item) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-terracotta shrink-0 group-hover:scale-125 group-hover:bg-gold-light transition-all duration-300" />
                  <span className="text-warm-beige/90 text-base sm:text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
