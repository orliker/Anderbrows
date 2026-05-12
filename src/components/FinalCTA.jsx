import { WHATSAPP_URL, COURSE, CONTACT } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FinalCTA() {
  const ref = useReveal({ delayBetween: 100 })
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#2A1810' }}>
      {/* Rich warm radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,95,50,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-terracotta/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-gold-warm/8 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      {/* Decorative gold divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-warm/30 to-transparent" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">

          {/* Badge */}
          <div className="reveal-init">
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              Próxima formação · {COURSE.date}
            </span>
          </div>

          {/* Headline */}
          <h2 className="reveal-init h-display mt-8 text-4xl sm:text-5xl md:text-[68px] leading-[1] text-warm-cream">
            Comece a sua jornada <br className="hidden sm:block" />
            com a <em className="not-italic italic gold-text">Anderbrows</em> ♡
          </h2>

          <p className="reveal-init mt-8 text-warm-beige/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Vagas limitadas para garantir o acompanhamento personalizado.
            Escolha a sua opção e garanta o seu lugar na próxima turma.
          </p>

          {/* CTAs */}
          <div className="reveal-init mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-10 !py-5 shadow-2xl text-base group/btn"
            >
              <WhatsappIcon />
              Reservar vaga via WhatsApp
              <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 duration-300" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="btn-secondary !px-10 !py-5 text-base"
            >
              Tirar dúvidas por email
            </a>
          </div>

          {/* Trust bullets */}
          <div className="reveal-init mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-widest2 text-warm-beige/55 font-bold">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Apoio pós-formação ✨
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Certificado de participação
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Prática em modelo real ♡
            </span>
          </div>

          {/* Decorative ornament */}
          <div className="reveal-init mt-16 flex items-center justify-center gap-5">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold-warm/25" />
            <span className="text-gold-warm/40 text-base tracking-widest">✦ ♡ ✦</span>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold-warm/25" />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z" strokeLinejoin="round" />
      <path d="M8.5 9.5c.5 2.5 3 5 5.5 5.5l1.5-1.5-2-1-1 .5c-1-.5-2-1.5-2.5-2.5l.5-1-1-2z" strokeLinejoin="round" />
    </svg>
  )
}
