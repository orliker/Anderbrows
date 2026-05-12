import { WHATSAPP_URL, COURSE, CONTACT } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FinalCTA() {
  const ref = useReveal({ delayBetween: 100 })
  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-warm-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(182,90,46,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold-warm/10 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal-init">
            <span className="badge-pill border-terracotta-soft/30 bg-white/40 text-terracotta">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
              Próxima formação · {COURSE.date}
            </span>
          </div>
          <h2 className="reveal-init h-display mt-8 text-4xl sm:text-5xl md:text-[68px] leading-[1] text-rich-black">
            Comece a sua jornada <br className="hidden sm:block" />
            com a <em className="not-italic italic gold-text">Anderbrows</em> ♡
          </h2>
          <p className="reveal-init mt-8 text-deep-brown text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Vagas limitadas para garantir o acompanhamento personalizado. 
            Escolha a sua opção e garanta o seu lugar na próxima turma.
          </p>

          <div className="reveal-init mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-10 !py-5 shadow-2xl !bg-terracotta hover:!bg-terracotta-warm"
            >
              <WhatsappIcon />
              Reservar vaga via WhatsApp
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn-secondary !px-10 !py-5 !border-terracotta/30 text-deep-brown hover:!bg-terracotta/5">
              Tirar dúvidas por email
            </a>
          </div>

          <div className="reveal-init mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-light" /> Apoio pós-formação</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-light" /> Certificado de participação</span>
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-light" /> Prática em modelo real</span>
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
