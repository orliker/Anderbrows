import { WHATSAPP_URL, COURSE, CONTACT } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FinalCTA() {
  const ref = useReveal({ delayBetween: 100 })
  return (
    <section ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200 pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold-grad opacity-20 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal-init">
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 animate-pulse" />
              Próxima turma · {COURSE.date} · {CONTACT.address.split(',')[0]}
            </span>
          </div>
          <h2 className="reveal-init h-display mt-7 text-4xl sm:text-5xl md:text-[64px] leading-[1.05]">
            Comece a sua jornada profissional <br className="hidden sm:block" />
            com a <em className="not-italic italic gold-text">Anderbrows</em>.
          </h2>
          <p className="reveal-init mt-6 text-mocha-700 text-base sm:text-lg leading-relaxed">
            Vagas limitadas. Reservar é gratuito — basta enviar uma mensagem.
            Voltamos a si em poucas horas.
          </p>

          <div className="reveal-init mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsappIcon />
              Reservar a minha vaga
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn-secondary">
              Falar por email
            </a>
          </div>

          <div className="reveal-init mt-12 flex items-center justify-center gap-6 text-xs uppercase tracking-widest2 text-mocha-700/70">
            <span>Apoio vitalício</span>
            <span className="w-1 h-1 rounded-full bg-mocha-700/40" />
            <span>Certificado oficial</span>
            <span className="w-1 h-1 rounded-full bg-mocha-700/40" />
            <span>Kit incluído</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z" strokeLinejoin="round" />
      <path d="M8.5 9.5c.5 2.5 3 5 5.5 5.5l1.5-1.5-2-1-1 .5c-1-.5-2-1.5-2.5-2.5l.5-1-1-2z" strokeLinejoin="round" />
    </svg>
  )
}
