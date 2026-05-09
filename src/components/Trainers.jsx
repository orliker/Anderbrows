import { useReveal } from '../hooks/useReveal.js'

const TRAINERS = [
  {
    name: 'Joana Barreira',
    role: 'Formadora · Anderbrows Beauty and Academy',
    bio: 'Especialista em Design de Sobrancelhas, Henna, Microblading, Nanoblanding, Lifting de Pestanas e Brow Lamination. Primeira aluna do Uander em Portugal, reconhecida pela técnica e resultados impecáveis.',
    photo: '/images/anderbrows/joana.jpeg',
    photoPosition: '70% 22%',
    badge: 'Trainer',
  },
  {
    name: 'Uander Machado',
    role: 'CEO · Anderbrows Beauty and Academy',
    bio: 'Master em Design de Sobrancelhas, Micropigmentação, Microblading e Nanoblanding. Com mais de 10 anos de experiência em procedimentos e formações, é uma das referências da área em Portugal.',
    photo: '/images/anderbrows/uander.jpeg',
    photoPosition: '50% 25%',
    badge: 'Founder',
  },
]

export default function Trainers() {
  const ref = useReveal({ delayBetween: 140 })

  return (
    <section id="formadores" ref={ref} className="relative py-20 sm:py-28 bg-cream-100/60">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="reveal-init">
            <span className="eyebrow">Os Formadores</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            Aprenda com quem é <em className="not-italic italic gold-text">referência</em> em Portugal.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mt-12 sm:mt-14">
          {TRAINERS.map((t) => (
            <article
              key={t.name}
              className="reveal-init group relative rounded-2xl sm:rounded-3xl bg-white border border-cream-200 overflow-hidden transition-all duration-500 hover:border-champagne-500/40 hover:shadow-soft hover:-translate-y-1"
            >
              {/* Photo — controlled height across breakpoints */}
              <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden bg-mocha-900">
                <img
                  src={t.photo}
                  alt={`Retrato de ${t.name}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: t.photoPosition }}
                />

                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-mocha-900/60 via-mocha-900/0 to-transparent pointer-events-none" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-cream-50/90 backdrop-blur text-[10px] uppercase tracking-widest2 text-mocha-900 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
                  Anderbrows {t.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 lg:p-8">
                <div className="text-[10px] uppercase tracking-widest2 text-champagne-600">
                  {t.role}
                </div>
                <h3 className="font-display text-2xl sm:text-2xl lg:text-3xl text-mocha-900 leading-tight mt-2">
                  {t.name}
                </h3>
                <p className="mt-4 text-sm sm:text-[15px] text-mocha-700 leading-relaxed">
                  {t.bio}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-champagne-500" />
                  <span className="text-[10px] uppercase tracking-widest2 text-mocha-700/70">
                    Equipa Anderbrows
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
