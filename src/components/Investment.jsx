import { COURSE, WHATSAPP_URL } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Investment() {
  const ref = useReveal({ delayBetween: 120 })

  return (
    <section id="investimento" ref={ref} className="relative py-20 sm:py-28 bg-chocolate text-warm-cream overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-terracotta/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold-warm/10 blur-[100px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta-soft">Investimento</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-off-white">
            Escolha a melhor <em className="not-italic italic gold-text">opção</em> para si
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/80 text-base sm:text-lg leading-relaxed">
            Duas possibilidades para adaptar a formação ao momento em que se encontra. 
            Próxima turma a <strong>{COURSE.date}</strong>.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Option 1: Base */}
          <div className="reveal-init relative rounded-[32px] border border-white/5 bg-white/5 backdrop-blur-sm p-8 sm:p-10 flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]">
            <div className="mb-8">
              <h3 className="font-display text-2xl sm:text-3xl text-off-white">Formação</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl sm:text-6xl text-off-white">{COURSE.priceBase}€</span>
              </div>
              <p className="mt-4 text-sm text-warm-beige/70 leading-relaxed font-medium">
                Acesso à formação profissional intensiva em Design de Sobrancelhas com aplicação de henna e coloração.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <IncludeItem text="Formação profissional intensiva" />
              <IncludeItem text="Prática orientada" />
              <IncludeItem text="Certificado de participação" />
              <IncludeItem text="Apoio pós-formação" />
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !w-full !border-white/20 !text-off-white hover:!bg-white/10"
            >
              Quero esta opção
            </a>
          </div>

          {/* Option 2: Full Kit */}
          <div className="reveal-init relative rounded-[32px] border border-terracotta/40 bg-deep-brown p-8 sm:p-10 flex flex-col transition-all duration-500 hover:border-terracotta/80 shadow-2xl group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,95,50,0.15)_0%,transparent_60%)] pointer-events-none rounded-[32px]" />
            <div className="absolute -top-4 right-8 bg-terracotta text-off-white text-[10px] uppercase tracking-widest2 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Mais completa
            </div>
            
            <div className="mb-8 relative z-10">
              <h3 className="font-display text-2xl sm:text-3xl text-off-white">Formação + Kit</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl sm:text-6xl text-terracotta-soft">{COURSE.priceWithKit}€</span>
              </div>
              <p className="mt-4 text-sm text-warm-beige/80 leading-relaxed font-medium">
                Inclui a formação profissional e um kit pensado para ajudar a formanda a iniciar os primeiros atendimentos.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              <IncludeItem text="Tudo da formação" active />
              <IncludeItem text="Kit para realizar de 20 a 30 procedimentos" active />
              <IncludeItem text="Mais preparação para começar" active />
              <IncludeItem text="Opção ideal para quem quer iniciar com material" active />
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !w-full !bg-terracotta hover:!bg-terracotta-warm relative z-10 shadow-lg"
            >
              Quero formação + kit ✨
            </a>
          </div>
        </div>

        <div className="reveal-init mt-16 text-center">
          <p className="text-xs text-warm-beige/40 max-w-lg mx-auto leading-relaxed">
            O valor da inscrição é de {COURSE.inscription}€ (dedutível no valor total) para reserva de vaga. 
            O restante valor é liquidado até 1 semana antes da formação.
          </p>
        </div>
      </div>
    </section>
  )
}

function IncludeItem({ text, active = false }) {
  return (
    <li className="flex items-start gap-3">
      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${active ? 'bg-terracotta/20 text-terracotta-soft' : 'bg-white/10 text-warm-beige/40'}`}>
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className={`text-sm font-medium ${active ? 'text-white' : 'text-warm-beige/60'}`}>{text}</span>
    </li>
  )
}
