import { INCLUDED } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

const iconMap = {
  theory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z" strokeLinejoin="round" />
      <path d="M4 19a2 2 0 0 1 2-2h12" />
    </svg>
  ),
  practice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="9" r="3.5" />
      <path d="M5 20c1-3.5 4-5 7-5s6 1.5 7 5" strokeLinecap="round" />
    </svg>
  ),
  manual: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M4 4h16v16H4z" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h8M8 17h5" strokeLinecap="round" />
    </svg>
  ),
  cert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="10" r="5" />
      <path d="M9 14l-1 7 4-2 4 2-1-7" strokeLinejoin="round" />
    </svg>
  ),
  kit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 8h18v12H3zM3 8l3-4h12l3 4M12 4v16M3 12h18" strokeLinejoin="round" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z" strokeLinejoin="round" />
      <path d="M8.5 9.5c.5 2.5 3 5 5.5 5.5l1.5-1.5-2-1-1 .5c-1-.5-2-1.5-2.5-2.5l.5-1-1-2z" strokeLinejoin="round" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="11" r="2.5" />
      <path d="M3 19c.8-3 3.2-4.5 6-4.5s5.2 1.5 6 4.5M14 19c.5-2 2-3 3.5-3s2.5 1 3 2.5" strokeLinecap="round" />
    </svg>
  ),
  events: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.6L12 14.7 7.1 17.3 8 11.7l-4-3.9 5.5-.8z" strokeLinejoin="round" />
      <path d="M5 21h14" strokeLinecap="round" />
    </svg>
  ),
}

export default function Included() {
  const ref = useReveal({ delayBetween: 60 })
  return (
    <section id="incluido" ref={ref} className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow">O que está incluído</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            Tudo o que precisa para começar — e <em className="not-italic italic gold-text">crescer</em>.
          </h2>
          <p className="reveal-init mt-5 text-mocha-700 text-base sm:text-lg leading-relaxed">
            Investe na formação e leva consigo material, certificação e acompanhamento contínuo.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INCLUDED.map((item, i) => (
            <article
              key={i}
              className="reveal-init group relative p-6 rounded-2xl border border-cream-200 bg-white hover:border-champagne-500/40 hover:shadow-card transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-cream-100 text-mocha-900 flex items-center justify-center mb-5 group-hover:bg-gold-grad transition-all duration-500">
                <span className="w-5 h-5 block">{iconMap[item.icon]}</span>
              </div>
              <h3 className="font-display text-lg text-mocha-900">{item.t}</h3>
              <p className="mt-2 text-sm text-mocha-700 leading-relaxed">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
