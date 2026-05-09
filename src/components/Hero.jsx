import { useEffect, useRef } from 'react'
import { animate, createTimeline, stagger, createDrawable } from 'animejs'
import { WHATSAPP_URL, COURSE } from '../constants/content.js'
import HeroVisual from './HeroVisual.jsx'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const root = heroRef.current
    if (!root) return

    const tl = createTimeline({ easing: 'easeOutExpo' })

    tl.add(root.querySelectorAll('.hero-badge'), {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 700,
    })
      .add(root.querySelectorAll('.hero-title-line'), {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: stagger(110),
        duration: 1000,
      }, '-=400')
      .add(root.querySelectorAll('.hero-sub'), {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      }, '-=600')
      .add(root.querySelectorAll('.hero-cta'), {
        opacity: [0, 1],
        translateY: [16, 0],
        delay: stagger(80),
        duration: 700,
      }, '-=500')
      .add(root.querySelectorAll('.hero-meta'), {
        opacity: [0, 1],
        translateY: [10, 0],
        delay: stagger(80),
        duration: 600,
      }, '-=400')
      .add(root.querySelector('.hero-visual'), {
        opacity: [0, 1],
        translateX: [40, 0],
        scale: [0.96, 1],
        duration: 1200,
      }, 200)

    // Animate decorative line drawing
    const lines = root.querySelectorAll('.hero-line')
    lines.forEach((l, i) => {
      const drawable = createDrawable(l, 0, 0)
      animate(drawable, {
        draw: '0 1',
        duration: 1600,
        easing: 'easeInOutSine',
        delay: 600 + i * 200,
      })
    })

    // Subtle float on the visual
    animate(root.querySelector('.hero-float'), {
      translateY: [0, -10],
      duration: 4000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    })

    return () => tl.pause()
  }, [])

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-cream-grad pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />

      {/* Decorative gold orbs */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-gold-grad opacity-15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-champagne-400/20 blur-3xl pointer-events-none" />

      {/* Decorative SVG lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="hero-line"
          d="M0,640 C 360,580 720,720 1440,560"
          stroke="url(#heroGradLine)"
          strokeWidth="1"
          fill="none"
        />
        <path
          className="hero-line"
          d="M0,720 C 480,660 960,780 1440,680"
          stroke="url(#heroGradLine)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="heroGradLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#C8A772" stopOpacity="0" />
            <stop offset="0.5" stopColor="#B08A5B" />
            <stop offset="1" stopColor="#C8A772" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="hero-badge inline-flex" style={{ opacity: 0 }}>
              <span className="badge-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 animate-pulse" />
                Formação Profissional · {COURSE.city} · {COURSE.date}
              </span>
            </div>

            <h1
              className="h-display mt-7"
              style={{ fontSize: 'clamp(2.25rem, 6.5vw, 4.625rem)', lineHeight: 1.05 }}
            >
              <span className="hero-title-line block" style={{ opacity: 0 }}>
                Domine o <em className="not-italic font-display italic gold-text">Design</em>
              </span>
              <span className="hero-title-line block" style={{ opacity: 0 }}>
                de Sobrancelhas
              </span>
              <span
                className="hero-title-line block text-mocha-700 mt-3"
                style={{ opacity: 0, fontSize: 'clamp(1.5rem, 4.5vw, 3.25rem)', lineHeight: 1.1 }}
              >
                com o método Anderbrows
              </span>
            </h1>

            <p
              className="hero-sub mt-7 max-w-xl text-base sm:text-lg text-mocha-700 leading-relaxed"
              style={{ opacity: 0 }}
            >
              Uma formação profissional para iniciantes e profissionais que desejam transformar
              técnica, beleza e conhecimento numa <strong className="text-mocha-900 font-medium">carreira rentável</strong>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta btn-primary"
                style={{ opacity: 0 }}
              >
                Quero reservar a minha vaga
                <ArrowRight />
              </a>
              <a
                href="#programa"
                className="hero-cta btn-secondary"
                style={{ opacity: 0 }}
              >
                Ver programa da formação
              </a>
            </div>

            {/* Meta strip */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { k: 'Próxima turma', v: COURSE.date },
                { k: 'Cidade', v: COURSE.city },
                { k: 'Apoio', v: 'Vitalício' },
                { k: 'Inclui', v: 'Kit + Certificado' },
              ].map((m, i) => (
                <div key={i} className="hero-meta" style={{ opacity: 0 }}>
                  <div className="text-[10px] uppercase tracking-widest2 text-mocha-700/60">
                    {m.k}
                  </div>
                  <div className="text-sm text-mocha-900 font-medium mt-0.5">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual */}
          <div
            className="lg:col-span-5 hero-visual relative"
            style={{ opacity: 0 }}
          >
            <div className="hero-float relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest2 text-mocha-700/60">
          Continue a explorar
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-champagne-500 to-transparent" />
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg
      className="w-4 h-4 transition-transform group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}
