import { WHATSAPP_URL, COURSE } from '../constants/content.js'
import HeroVisual from './HeroVisual.jsx'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-24 overflow-hidden bg-warm-beige studio-edge-light"
    >
      <div className="absolute inset-0 bg-noise opacity-45 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-off-white/70 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-cream/80 to-transparent pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          <div className="lg:col-span-6">
            <h1
              className="h-display text-rich-black"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 5.75rem)', lineHeight: 0.96 }}
            >
              <span className="hero-rise block font-bold" style={{ animationDelay: '80ms' }}>
                Formação profissional em
              </span>
              <span className="hero-rise block font-display italic text-terracotta" style={{ animationDelay: '170ms' }}>
                Design de Sobrancelhas
              </span>
            </h1>

            <p
              className="hero-rise mt-7 max-w-2xl text-lg sm:text-xl text-chocolate leading-relaxed font-semibold"
              style={{ animationDelay: '280ms' }}
            >
              Uma experiência prática, próxima e muito cuidada para dominar mapeamento, simetria, henna e coloração com o método Anderbrows.
            </p>

            <p
              className="hero-rise mt-4 max-w-xl text-base text-deep-brown/80 leading-relaxed font-medium"
              style={{ animationDelay: '360ms' }}
            >
              {COURSE.description}
            </p>

            <div className="hero-rise mt-9 flex flex-col sm:flex-row gap-4" style={{ animationDelay: '450ms' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Reservar vaga 🤎
              </a>
              <a href="#programa" className="btn-secondary !bg-white/45 hover:!bg-deep-brown">
                Ver programa ✨
              </a>
            </div>

            <div className="hero-rise mt-11 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl" style={{ animationDelay: '540ms' }}>
              {[
                { k: 'Data', v: COURSE.date },
                { k: 'Local', v: COURSE.city },
                { k: 'Prática', v: 'Modelo real' },
              ].map((m) => (
                <div key={m.k} className="border-l border-terracotta/30 pl-4">
                  <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
                    {m.k}
                  </div>
                  <div className="text-base text-rich-black font-bold mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-rise lg:col-span-6 relative" style={{ animationDelay: '300ms' }}>
            <div className="hero-float relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
