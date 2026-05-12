import { COURSE, WHATSAPP_URL } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Investment() {
  const ref = useReveal({ delayBetween: 120 })

  return (
    <section id="investimento" ref={ref} className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#120D09' }}>
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-terracotta/12 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold-warm/8 blur-[110px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta">Investimento ✦</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream">
            Escolha a melhor <em className="not-italic italic gold-text">opção</em> para si
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/65 text-base sm:text-lg leading-relaxed">
            Duas possibilidades para adaptar a formação ao momento em que se encontra.
            Próxima turma a <strong className="text-warm-cream font-bold">{COURSE.date}</strong>. ♡
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Option 1: Formação */}
          <div
            className="reveal-init group relative rounded-[32px] border p-8 sm:p-10 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: '#1A100B', borderColor: 'rgba(255,255,255,0.10)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(196,95,50,0.30)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'}
          >
            <div className="mb-8">
              <div className="text-[10px] uppercase tracking-widest2 text-terracotta/60 font-bold mb-3">Opção base</div>
              <h3 className="font-display text-2xl sm:text-3xl text-warm-cream">Formação</h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl sm:text-6xl text-warm-cream font-bold">{COURSE.priceBase}€</span>
              </div>
              <p className="mt-4 text-sm text-warm-beige/60 leading-relaxed font-medium">
                Acesso à formação profissional intensiva em Design de Sobrancelhas com aplicação de henna e coloração.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <IncludeItem text="Formação profissional intensiva" />
              <IncludeItem text="Prática orientada com formadores" />
              <IncludeItem text="Certificado de participação" />
              <IncludeItem text="Apoio pós-formação ✨" />
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full border-2 text-warm-beige font-bold text-sm tracking-wide transition-all duration-300 hover:bg-warm-beige/8 hover:border-warm-beige/50 group/btn"
              style={{ borderColor: 'rgba(234,219,200,0.25)' }}
            >
              Quero esta opção
              <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 duration-300" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Option 2: Formação + Kit */}
          <div
            className="reveal-init group relative rounded-[32px] border p-8 sm:p-10 flex flex-col transition-all duration-500 hover:-translate-y-1.5 shadow-2xl hover:shadow-[0_30px_60px_-15px_rgba(196,95,50,0.30)]"
            style={{ background: '#2A1810', borderColor: 'rgba(196,95,50,0.45)' }}
          >
            {/* "Mais completa" badge */}
            <div className="absolute -top-4 right-8 bg-terracotta text-white text-[10px] uppercase tracking-widest2 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Mais completa ✦
            </div>

            {/* Radial warm glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,95,50,0.14)_0%,transparent_60%)] pointer-events-none rounded-[32px]" />

            <div className="mb-8 relative z-10">
              <div className="text-[10px] uppercase tracking-widest2 text-terracotta/70 font-bold mb-3">Opção recomendada</div>
              <h3 className="font-display text-2xl sm:text-3xl text-warm-cream">Formação + Kit</h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-5xl sm:text-6xl font-bold text-terracotta-soft">{COURSE.priceWithKit}€</span>
              </div>
              <p className="mt-4 text-sm text-warm-beige/65 leading-relaxed font-medium">
                Inclui a formação profissional e um kit para iniciar os primeiros atendimentos com materiais profissionais.
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow relative z-10">
              <IncludeItem text="Tudo da formação" active />
              <IncludeItem text="Kit para realizar de 20 a 30 procedimentos" active />
              <IncludeItem text="Mais preparação para começar" active />
              <IncludeItem text="Ideal para quem quer iniciar com material" active />
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full relative z-10 shadow-xl group/btn"
            >
              Quero formação + kit ✨
              <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 duration-300" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Fine print */}
        <div className="reveal-init mt-16 text-center">
          <p className="text-xs text-warm-beige/30 max-w-lg mx-auto leading-relaxed">
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
      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
        active ? 'bg-terracotta/22 text-terracotta-soft border border-terracotta/30' : 'bg-white/6 text-warm-beige/40 border border-white/10'
      }`}>
        <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 12l5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className={`text-sm font-medium leading-snug ${active ? 'text-warm-cream' : 'text-warm-beige/60'}`}>{text}</span>
    </li>
  )
}
