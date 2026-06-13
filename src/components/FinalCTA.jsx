import { WHATSAPP_URL, COURSE } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FinalCTA() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section ref={ref} className="relative py-20 sm:py-24 overflow-hidden bg-warm-cream studio-edge-light studio-hairline">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="reveal-init text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
              Próxima formação · {COURSE.date}
            </div>
            <h2 className="reveal-init h-display mt-6 text-4xl sm:text-5xl md:text-[68px] leading-[1] text-rich-black">
              Reserve a sua vaga na próxima turma Anderbrows. 🤎
            </h2>
            <p className="reveal-init mt-7 text-deep-brown text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              As vagas são limitadas para preservar acompanhamento próximo durante a prática. Fale connosco e receba as condições de inscrição.
            </p>

            <div className="reveal-init mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-10 !py-5 shadow-2xl"
              >
              Reservar via WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal-init lg:col-span-5">
            <div className="relative rounded-[28px] overflow-hidden border border-terracotta/20 shadow-2xl bg-rich-black p-7 sm:p-9 text-warm-cream">
              <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold">
                  Próxima turma
                </div>
                <div className="mt-5 font-display text-5xl leading-none text-white">
                  {COURSE.date}
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest2 text-warm-beige/55 font-bold">
                  {COURSE.city}
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-terracotta/50 via-warm-beige/20 to-transparent" />

                <ul className="space-y-4 text-sm font-semibold text-warm-beige/80">
                  {['Vagas limitadas', 'Prática acompanhada', 'Certificado incluído'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-terracotta-soft" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
