import { INCLUDED } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

const iconMap = {
  theory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
    </svg>
  ),
  practice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinejoin="round" />
    </svg>
  ),
  manual: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinejoin="round" />
    </svg>
  ),
  cert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 15l-2 5 2-1 2 1-2-5z" strokeLinejoin="round" />
      <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" strokeLinejoin="round" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" strokeLinejoin="round" />
    </svg>
  ),
  kit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinejoin="round" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeLinejoin="round" />
      <line x1="12" y1="22.08" x2="12" y2="12" strokeLinejoin="round" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 5.5Z" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Included() {
  const ref = useReveal({ delayBetween: 60 })
  return (
    /* Sección oscura castanho — texto claro */
    <section id="incluido" ref={ref} className="relative py-20 sm:py-28" style={{ background: '#2A1810' }}>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-terracotta/8 blur-[130px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">O que está incluído</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-warm-cream">
            Uma estrutura completa para o seu <em className="not-italic italic gold-text">percurso</em>.
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/70 text-base sm:text-lg leading-relaxed font-medium">
            Mais do que técnica, entregamos as ferramentas necessárias para iniciar o seu percurso profissional com total segurança.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INCLUDED.map((item, i) => (
            <article
              key={i}
              className="reveal-init group relative p-8 rounded-[32px] border border-terracotta/20 hover:border-terracotta/50 transition-all duration-500 hover:-translate-y-1 shadow-lg"
              style={{ background: '#1A100B' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-8 group-hover:bg-terracotta group-hover:text-white transition-all duration-500 group-hover:scale-110 border border-terracotta/25">
                <span className="w-6 h-6 block">{iconMap[item.icon]}</span>
              </div>
              <h3 className="font-display text-2xl text-warm-cream leading-tight">{item.t}</h3>
              <p className="mt-4 text-sm text-warm-beige/65 leading-relaxed font-medium">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
