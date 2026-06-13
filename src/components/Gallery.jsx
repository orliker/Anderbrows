import { useReveal } from '../hooks/useReveal.js'

const moments = [
  {
    n: '01',
    title: 'Turma reduzida',
    text: 'Grupo pequeno para manter acompanhamento próximo, correção individual e ritmo real de prática.',
  },
  {
    n: '02',
    title: 'Mão na massa',
    text: 'A técnica é treinada em modelo real, com orientação direta durante cada etapa do atendimento.',
  },
  {
    n: '03',
    title: 'Certificado no fim',
    text: 'A formação fecha com certificado de participação e uma base clara para continuar a evoluir.',
  },
]

export default function Gallery() {
  const ref = useReveal({ delayBetween: 85 })

  return (
    <section id="formacao" ref={ref} className="relative py-16 sm:py-24 bg-warm-cream studio-edge-light studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-9">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Por dentro da formação</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
              Uma turma pequena, prática real e um ambiente próximo.
            </h2>
          </div>
          <p className="reveal-init lg:col-span-5 text-deep-brown/75 text-base sm:text-lg leading-relaxed font-medium">
            Aqui não é só uma aula bonita no papel. É mão na massa, correção lado a lado, certificado no final e aquela sensação de “agora eu consigo”. 🤎
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
          {moments.map((moment) => (
            <article
              key={moment.n}
              className="reveal-init relative min-h-[260px] rounded-[24px] overflow-hidden border border-terracotta/18 bg-off-white/85 p-7 sm:p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-terracotta/35 hover:bg-white"
            >
              <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-5">
                  <span className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
                    Momento {moment.n}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-terracotta/35 to-transparent" />
                </div>
                <div className="pt-14">
                  <h3 className="font-display text-3xl sm:text-4xl leading-none text-rich-black">
                    {moment.title}
                  </h3>
                  <p className="mt-5 text-sm sm:text-base text-deep-brown/75 leading-relaxed font-medium">
                    {moment.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
