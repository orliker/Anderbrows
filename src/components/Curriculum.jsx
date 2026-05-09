import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'

const GROUPS = [
  {
    id: 'fundamentos',
    label: 'Fundamentos',
    sub: 'Bases técnicas e profissionais',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z" strokeLinejoin="round" />
        <path d="M4 19a2 2 0 0 1 2-2h12" />
      </svg>
    ),
    items: [
      'Introdução ao design de sobrancelhas',
      'Visagismo aplicado às sobrancelhas',
      'Pele e tipos de pele',
      'Higienização e biossegurança',
      'Ética profissional',
      'Atendimento ao cliente',
    ],
  },
  {
    id: 'tecnica',
    label: 'Técnica Anderbrows',
    sub: 'O método aplicado passo a passo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" strokeLinecap="round" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
    items: [
      'Materiais utilizados',
      'Design técnico — método Anderbrows',
      'Marcações com linha e paquímetro',
      'Modelagem com linha',
      'Simetria das sobrancelhas',
      'Formatos e elementos do rosto',
    ],
  },
  {
    id: 'design',
    label: 'Design e Simetria',
    sub: 'Adaptação a cada cliente',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c1.5-3.6 4.2-5 7-5s5.5 1.4 7 5" strokeLinecap="round" />
      </svg>
    ),
    items: [
      'Design feminino',
      'Design masculino',
      'Design em crianças e adolescentes',
    ],
  },
  {
    id: 'henna',
    label: 'Henna & Coloração',
    sub: 'Aplicação e finalização',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M12 3c-3 4-5 7-5 10a5 5 0 0 0 10 0c0-3-2-6-5-10z" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      'Coloração dos pelos',
      'Preparação da pele, limpeza, remoção e hidratação',
      'Aplicação de henna',
    ],
  },
]

export default function Curriculum() {
  const ref = useReveal({ delayBetween: 80, y: 24 })
  const [activeId, setActiveId] = useState(GROUPS[0].id)

  const activeIndex = GROUPS.findIndex((g) => g.id === activeId)
  const active = GROUPS[activeIndex] ?? GROUPS[0]

  const goPrev = () => setActiveId(GROUPS[(activeIndex - 1 + GROUPS.length) % GROUPS.length].id)
  const goNext = () => setActiveId(GROUPS[(activeIndex + 1) % GROUPS.length].id)

  return (
    <section id="programa" ref={ref} className="relative py-20 sm:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow">O que vai aprender</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
              Um programa completo, do <em className="not-italic italic gold-text">visagismo</em> à
              aplicação de henna.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal-init text-mocha-700 text-base sm:text-lg leading-relaxed">
              <strong className="text-mocha-900 font-medium">18 módulos</strong> organizados em{' '}
              <strong className="text-mocha-900 font-medium">4 pilares</strong> — teoria,
              demonstração e prática real em modelo, com acompanhamento personalizado.
            </p>
          </div>
        </div>

        {/* Pills grid 2x2 mobile / 4 cols desktop */}
        <div className="reveal-init grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {GROUPS.map((g, i) => {
            const isActive = g.id === activeId
            return (
              <button
                key={g.id}
                onClick={() => setActiveId(g.id)}
                aria-pressed={isActive}
                className={`group relative text-left rounded-2xl p-4 sm:p-5 border transition-all duration-500 min-h-[112px] sm:min-h-[128px] ${
                  isActive
                    ? 'bg-mocha-900 text-cream-50 border-mocha-900 shadow-soft'
                    : 'bg-white text-mocha-900 border-cream-200 hover:border-champagne-500/40 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-champagne-500/20 text-champagne-400'
                        : 'bg-cream-100 text-champagne-600 group-hover:bg-gold-grad group-hover:text-mocha-900'
                    }`}
                  >
                    <span className="w-5 h-5 block">{g.icon}</span>
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-widest2 ${
                      isActive ? 'text-champagne-400' : 'text-mocha-700/50'
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="font-display text-base sm:text-lg leading-tight">
                  {g.label}
                </div>
                <div
                  className={`text-[11px] mt-1 leading-snug ${
                    isActive ? 'text-cream-200/70' : 'text-mocha-700/60'
                  }`}
                >
                  {g.items.length} módulos
                </div>

                {/* Active indicator dot */}
                <span
                  className={`absolute top-3 right-3 w-2 h-2 rounded-full transition-all duration-500 ${
                    isActive ? 'bg-champagne-400 scale-100' : 'scale-0'
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Active panel */}
        <div className="reveal-init mt-6 sm:mt-7">
          <div className="relative rounded-3xl border border-cream-200 bg-white p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-champagne-400/15 blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Panel header */}
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest2 text-champagne-600">
                    Pilar {activeIndex + 1} / {GROUPS.length}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-mocha-900 mt-1 leading-tight">
                    {active.label}
                  </h3>
                  <p className="text-sm text-mocha-700/70 mt-1">{active.sub}</p>
                </div>

                {/* Prev / next on mobile too */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={goPrev}
                    aria-label="Pilar anterior"
                    className="w-10 h-10 rounded-full border border-cream-200 bg-white text-mocha-900 flex items-center justify-center hover:border-champagne-500/40 hover:bg-cream-100 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Pilar seguinte"
                    className="w-10 h-10 rounded-full bg-mocha-900 text-cream-50 flex items-center justify-center hover:bg-mocha-800 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-6 gold-divider" />

              {/* Topic list with stagger */}
              <ul
                key={active.id}
                className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4"
              >
                {active.items.map((it, i) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-mocha-800"
                    style={{
                      animation: `fadeInUp 0.55s ${i * 60}ms both ease-out`,
                    }}
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-champagne-500 shrink-0" />
                    <span className="text-sm sm:text-base leading-snug">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-5 flex items-center gap-2">
            {GROUPS.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setActiveId(g.id)}
                aria-label={`Ver ${g.label}`}
                className={`h-1 rounded-full transition-all duration-500 flex-1 sm:flex-none ${
                  i === activeIndex
                    ? 'sm:w-12 bg-champagne-500'
                    : 'sm:w-6 bg-cream-200 hover:bg-champagne-500/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
