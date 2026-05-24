import { WHATSAPP_URL, COURSE, CONTACT } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function FinalCTA() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-warm-cream">
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
              <a href={`mailto:${CONTACT.email}`} className="btn-secondary !px-10 !py-5 !border-terracotta/30 text-deep-brown">
                Tirar dúvidas por email
              </a>
            </div>
          </div>

          <div className="reveal-init lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-terracotta/20 shadow-2xl bg-rich-black">
              <img
                src="/images/anderbrows/kit-editorial.jpg"
                alt="Kit profissional Anderbrows"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 42%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-6 right-6 bottom-6">
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold">
                  Opção com kit
                </div>
                <p className="mt-2 font-display text-3xl text-white leading-tight">
                  Material para iniciar com estrutura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
