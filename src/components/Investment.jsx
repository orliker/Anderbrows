import { COURSE, WHATSAPP_URL } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Investment() {
  const ref = useReveal({ delayBetween: 120 })

  return (
    <section id="investimento" ref={ref} className="relative py-16 sm:py-24 bg-chocolate text-warm-cream studio-edge-dark studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta-soft">Investimento</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-off-white">
            Escolha a opção certa para o seu momento.
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/80 text-base sm:text-lg leading-relaxed">
            Próxima turma a <strong>{COURSE.date}</strong>, com vagas limitadas para manter o acompanhamento próximo.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
          <PlanCard
            title="Formação"
            price={COURSE.priceBase}
            text="Acesso à formação profissional intensiva em Design de Sobrancelhas com henna e coloração."
            items={['Formação intensiva', 'Prática orientada', 'Certificado de participação', 'Suporte pós-formação']}
          />

          <PlanCard
            featured
            title="Formação + Kit"
            price={COURSE.priceWithKit}
            text="Inclui a formação e um kit pensado para iniciar os primeiros atendimentos com estrutura."
            items={[
              'Tudo da formação',
              'Kit para 20 a 30 procedimentos',
              'Mais preparação para começar',
              'Opção indicada para iniciar com material',
            ]}
          />
        </div>

        <div className="reveal-init mt-14 text-center">
          <p className="text-xs text-warm-beige/50 max-w-lg mx-auto leading-relaxed">
            A inscrição é de {COURSE.inscription}€ e desconta no valor total. O restante é liquidado até uma semana antes da formação.
          </p>
        </div>
      </div>
    </section>
  )
}

function PlanCard({ title, price, text, items, featured = false }) {
  return (
    <div
      className={`reveal-init relative rounded-[28px] p-8 sm:p-10 flex flex-col transition-all duration-500 ${
        featured
          ? 'border border-terracotta/45 bg-deep-brown shadow-2xl'
          : 'border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20'
      }`}
    >
      {featured && (
        <div className="absolute -top-4 right-8 bg-terracotta text-off-white text-[10px] uppercase tracking-widest2 px-4 py-2 rounded-full font-bold shadow-lg">
          Mais completa
        </div>
      )}

      <div className="mb-8 relative z-10">
        <h3 className="font-display text-2xl sm:text-3xl text-off-white">{title}</h3>
        <div className="mt-4 flex items-baseline gap-2">
          <span className={`font-display text-5xl sm:text-6xl ${featured ? 'text-terracotta-soft' : 'text-off-white'}`}>
            {price}€
          </span>
        </div>
        <p className="mt-4 text-sm text-warm-beige/75 leading-relaxed font-medium">{text}</p>
      </div>

      <ul className="space-y-4 mb-10 flex-grow relative z-10">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${featured ? 'bg-terracotta/20 text-terracotta-soft' : 'bg-white/10 text-warm-beige/50'}`}>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={`text-sm font-medium ${featured ? 'text-white' : 'text-warm-beige/65'}`}>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={featured ? 'btn-primary !w-full relative z-10' : 'btn-secondary !w-full !border-white/20 !text-off-white hover:!bg-white/10'}
      >
        {featured ? 'Quero formação + kit' : 'Quero esta opção'}
      </a>
    </div>
  )
}
