import { useState } from 'react'
import { CURRICULUM } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

const MODULE_ICONS = ['✦', '♡', '✨', '✦']

export default function Curriculum() {
  const ref = useReveal({ delayBetween: 80, y: 24 })
  const [activeIdx, setActiveIdx] = useState(0)

  const active = CURRICULUM[activeIdx]

  const goPrev = () => setActiveIdx((activeIdx - 1 + CURRICULUM.length) % CURRICULUM.length)
  const goNext = () => setActiveIdx((activeIdx + 1) % CURRICULUM.length)

  return (
    <section id="programa" ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#120D09' }}>
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-terracotta/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-warm/6 blur-[100px] pointer-events-none" />

      <div className="container-x relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">O Programa ✦</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream">
            Tudo o que precisa para dominar a <em className="not-italic italic text-terracotta-soft">técnica</em>.
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/70 text-base sm:text-lg leading-relaxed font-medium">
            Uma estrutura pensada para levar do zero ao resultado profissional, com foco em visagismo, simetria e precisão. ✨
          </p>
        </div>

        {/* Tabs grid */}
        <div className="reveal-init grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {CURRICULUM.map((g, i) => {
            const isActive = i === activeIdx
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`relative p-5 rounded-[24px] border text-left transition-all duration-500 group ${
                  isActive
                    ? 'bg-terracotta text-white border-terracotta shadow-xl scale-[1.02]'
                    : 'bg-white/5 text-warm-beige border-white/10 hover:border-terracotta/40 hover:bg-white/10 hover:-translate-y-0.5'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-widest2 mb-2 flex items-center justify-between ${isActive ? 'text-white/75' : 'text-terracotta/60'}`}>
                  <span>Módulo 0{i + 1}</span>
                  <span className={`text-base transition-all duration-300 ${isActive ? 'text-white/60' : 'text-warm-beige/25 group-hover:text-terracotta/50'}`}>
                    {MODULE_ICONS[i]}
                  </span>
                </div>
                <div className="font-display text-base sm:text-lg leading-tight font-bold">
                  {g.title}
                </div>
                {isActive && (
                  <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                )}
              </button>
            )
          })}
        </div>

        {/* Active Content Panel */}
        <div
          className="reveal-init relative rounded-[40px] overflow-hidden shadow-2xl border border-terracotta/25"
          style={{ background: '#1A100B' }}
        >
          {/* Warm glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-warm/6 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="flex items-center justify-between gap-6 flex-wrap mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">Conteúdo detalhado</span>
                  <span className="text-terracotta/50 text-sm">✦</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-warm-cream">{active.title}</h3>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  aria-label="Módulo anterior"
                  className="w-12 h-12 rounded-full border border-warm-beige/25 text-warm-beige/70 flex items-center justify-center hover:bg-warm-beige/10 hover:border-warm-beige/50 hover:text-warm-cream transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  aria-label="Módulo seguinte"
                  className="w-12 h-12 rounded-full bg-terracotta text-white flex items-center justify-center hover:bg-[#B9552A] hover:scale-105 transition-all duration-300 shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full h-px bg-white/8 mb-10" />

            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
              {active.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group/item">
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-terracotta shrink-0 group-hover/item:scale-125 group-hover/item:bg-gold-warm transition-all duration-300 shadow-sm" />
                  <span className="text-warm-cream text-base sm:text-lg font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Progress dots */}
            <div className="mt-12 pt-8 border-t border-white/8 flex items-center justify-between flex-wrap gap-4">
              <span className="text-[10px] uppercase tracking-widest2 text-warm-beige/35 font-bold">
                Módulo {activeIdx + 1} de {CURRICULUM.length}
              </span>
              <div className="flex gap-2 items-center">
                {CURRICULUM.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`rounded-full transition-all duration-400 ${i === activeIdx ? 'bg-terracotta w-7 h-2' : 'bg-warm-beige/20 hover:bg-warm-beige/40 w-2 h-2'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
