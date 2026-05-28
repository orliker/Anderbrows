import { AUDIENCE } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Audience() {
  const ref = useReveal({ delayBetween: 100 })

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-deep-brown text-off-white overflow-hidden studio-edge-dark">
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="max-w-3xl lg:col-span-8">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta-soft">Para quem é</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream leading-tight">
              Para quem quer transformar estética em atendimento profissional.
            </h2>
          </div>
          <div className="reveal-init hidden lg:block lg:col-span-4">
            <div className="relative h-44 rounded-[24px] overflow-hidden border border-terracotta/25 shadow-2xl bg-rich-black">
              <img
                src="/images/anderbrows/student-certificates.jpg"
                alt="Formandas Anderbrows com certificados"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 45%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/76 via-rich-black/10 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5">
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold">
                  Turmas próximas
                </div>
                <p className="mt-1 text-sm text-warm-cream font-semibold leading-snug">
                  Acompanhamento real, conversa direta e certificado no fim.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 sm:mt-12">
          {AUDIENCE.map((a, i) => (
            <article
              key={a.title}
              className="reveal-init relative rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm p-7 transition-all duration-500 hover:border-terracotta/40 hover:bg-white/[0.08] hover:-translate-y-1"
            >
              <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mb-8">
                Perfil 0{i + 1}
              </div>
              <h3 className="font-display text-2xl text-warm-cream leading-tight">{a.title}</h3>
              <p className="mt-4 text-sm text-warm-beige/70 leading-relaxed">{a.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
