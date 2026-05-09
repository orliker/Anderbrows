import { COURSE, WHATSAPP_URL } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Investment() {
  const ref = useReveal({ delayBetween: 120 })

  return (
    <section id="investimento" ref={ref} className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-mocha-700/40 bg-mocha-900 text-cream-50 p-6 sm:p-12 lg:p-16">
          {/* Ambient */}
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-champagne-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-champagne-500/10 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="reveal-init">
                <span className="eyebrow text-cream-200/80">Investimento</span>
              </div>
              <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-cream-50">
                Reserve a sua <em className="not-italic italic gold-text">vaga</em>.
              </h2>
              <p className="reveal-init mt-5 max-w-xl text-cream-200/80 leading-relaxed">
                Próxima formação a <strong className="text-cream-50">{COURSE.date}</strong> no{' '}
                <strong className="text-cream-50">Porto</strong>. Vagas limitadas — a inscrição reserva o seu lugar.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="reveal-init rounded-2xl border border-cream-50/10 bg-mocha-800/40 p-6">
                  <div className="text-[10px] uppercase tracking-widest2 text-champagne-400">
                    Valor da formação
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-5xl sm:text-6xl text-cream-50">490€</span>
                    <span className="text-sm text-cream-200/70">+ IVA</span>
                  </div>
                  <p className="mt-3 text-xs text-cream-200/70">
                    Pagamento por transferência, MBWay ou numerário até 1 semana antes.
                  </p>
                </div>

                <div className="reveal-init rounded-2xl border border-champagne-500/40 bg-gold-grad text-mocha-900 p-6">
                  <div className="text-[10px] uppercase tracking-widest2 text-mocha-900/80">
                    Inscrição
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-5xl sm:text-6xl">100€</span>
                  </div>
                  <p className="mt-3 text-xs text-mocha-900/80">
                    Reserva a sua vaga. Descontado do valor total da formação.
                  </p>
                </div>
              </div>

              <div className="reveal-init mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !bg-cream-50 !text-mocha-900 hover:!bg-white"
                >
                  <WhatsappIcon />
                  Reservar via WhatsApp
                </a>
                <a href="#programa" className="btn-secondary !border-cream-50/30 !text-cream-50 hover:!bg-cream-50/10">
                  Ver programa completo
                </a>
              </div>
            </div>

            {/* Right: ticket-style card */}
            <div className="lg:col-span-5 reveal-init">
              <div className="relative rounded-2xl bg-cream-50 text-mocha-900 p-7 sm:p-8 shadow-soft">
                <div className="flex items-center justify-between border-b border-dashed border-mocha-900/20 pb-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest2 text-mocha-700/60">
                      Próxima formação
                    </div>
                    <div className="mt-1 font-display text-2xl">{COURSE.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest2 text-mocha-700/60">
                      Cidade
                    </div>
                    <div className="mt-1 font-display text-2xl">{COURSE.city}</div>
                  </div>
                </div>
                <div className="pt-5 space-y-2">
                  <Row label="Formação" value="Design + Henna + Coloração" />
                  <Row label="Formato" value="Teoria + prática em modelo" />
                  <Row label="Duração" value="Dia completo" />
                  <Row label="Vagas" value="Limitadas" />
                  <Row label="Certificado" value="Sim, oficial" />
                </div>
                {/* Decorative ticket holes */}
                <span className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-mocha-900" />
                <span className="absolute -right-2 top-1/2 w-4 h-4 rounded-full bg-mocha-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-mocha-700/70">{label}</span>
      <span className="text-mocha-900 font-medium">{value}</span>
    </div>
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
