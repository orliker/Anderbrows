import { PILLARS } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Authority() {
  const ref = useReveal({ delayBetween: 110 })

  return (
    <section id="sobre" ref={ref} className="relative py-16 sm:py-24 bg-warm-cream studio-edge-light studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Anderbrows Academy</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
              Técnica bonita não nasce por acaso. Nasce de método, cuidado e presença.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="reveal-init text-mocha-800/80 text-base sm:text-lg leading-relaxed font-medium">
              A formação combina leitura facial, precisão de marcação e prática acompanhada. A proposta é simples:
              sair com uma técnica organizada, repetível e pronta para atendimento profissional, sem perder o toque humano.
            </p>
            <div className="reveal-init mt-7 rounded-[24px] border border-terracotta/20 bg-off-white/80 p-5 shadow-card backdrop-blur">
              <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
                Ambiente de estúdio
              </div>
              <p className="mt-3 text-sm leading-relaxed text-deep-brown/80 font-medium">
                Turma pequena, mesa organizada, correção lado a lado e tempo para perguntar sem pressa.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <article
              key={p.label}
              className="reveal-init relative p-7 rounded-[24px] border border-warm-beige bg-off-white/85 backdrop-blur transition-all duration-500 hover:border-terracotta/40 hover:shadow-card hover:-translate-y-1 hover:bg-white group"
            >
              <div className="flex items-center justify-between mb-7">
                <span className="text-[10px] font-bold uppercase tracking-widest2 text-terracotta">
                  0{i + 1}
                </span>
                <div className="w-8 h-px bg-warm-beige group-hover:bg-terracotta group-hover:w-12 transition-all duration-500" />
              </div>
              <h3 className="font-display text-2xl text-deep-brown leading-tight">{p.label}</h3>
              <p className="mt-4 text-sm text-mocha-800/70 leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
