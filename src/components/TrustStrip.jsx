import { useCountUp, useReveal } from '../hooks/useReveal.js'

const TRUST = [
  { value: 10, suffix: '+', label: 'anos', sub: 'Experiência real em estética e formação ✨' },
  { value: 30, suffix: '', label: 'procedimentos', sub: 'Potencial do kit profissional' },
  { value: 13, suffix: '', label: 'julho', sub: 'Próxima turma no Porto 📍' },
  { value: 100, suffix: '€', label: 'inscrição', sub: 'Valor descontado no total' },
]

function TrustNumber({ item }) {
  const ref = useCountUp(item.value, { duration: 1400 })

  return (
    <article className="reveal-init stat-card bg-off-white/95 border border-terracotta/20 rounded-[22px] px-5 py-5 shadow-card backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/40">
      <div className="number-accent flex items-baseline gap-1 pb-3">
        <span ref={ref} className="count-number font-display text-4xl sm:text-5xl leading-none text-rich-black">
          0
        </span>
        <span className="font-display text-2xl text-terracotta">{item.suffix}</span>
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
        {item.label}
      </div>
      <p className="mt-2 text-xs text-mocha-800/70 font-medium leading-snug">{item.sub}</p>
    </article>
  )
}

export default function TrustStrip() {
  const ref = useReveal({ delayBetween: 90, y: 16 })

  return (
    <section ref={ref} className="relative z-20 -mt-8 pb-10 bg-transparent">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST.map((item) => (
            <TrustNumber key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
