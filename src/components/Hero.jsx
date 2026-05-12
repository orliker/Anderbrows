import { useEffect, useRef } from 'react'
import { animate, createTimeline, stagger, createDrawable } from 'animejs'
import { WHATSAPP_URL, COURSE } from '../constants/content.js'
import HeroVisual from './HeroVisual.jsx'

/* Small decorative floating element */
function FloatChip({ children, className, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctrl = animate(el, {
      translateY: [0, -7],
      duration: 3600 + delay * 200,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
      delay,
    })
    return () => ctrl.pause?.()
  }, [delay])
  return <div ref={ref} className={className}>{children}</div>
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const root = heroRef.current
    if (!root) return

    const tl = createTimeline({ easing: 'easeOutExpo' })

    tl.add(root.querySelectorAll('.hero-badge'), {
      opacity: [0, 1],
      translateY: [12, 0],
      duration: 700,
    })
      .add(root.querySelectorAll('.hero-title-line'), {
        opacity: [0, 1],
        translateY: [50, 0],
        delay: stagger(120),
        duration: 1100,
      }, '-=400')
      .add(root.querySelectorAll('.hero-sub'), {
        opacity: [0, 1],
        translateY: [22, 0],
        delay: stagger(100),
        duration: 850,
      }, '-=600')
      .add(root.querySelectorAll('.hero-cta'), {
        opacity: [0, 1],
        translateY: [18, 0],
        scale: [0.96, 1],
        delay: stagger(100),
        duration: 700,
      }, '-=500')
      .add(root.querySelectorAll('.hero-meta'), {
        opacity: [0, 1],
        translateY: [12, 0],
        delay: stagger(80),
        duration: 600,
      }, '-=400')
      .add(root.querySelector('.hero-visual'), {
        opacity: [0, 1],
        translateX: [50, 0],
        scale: [0.94, 1],
        duration: 1300,
      }, 200)

    // Draw decorative lines
    const lines = root.querySelectorAll('.hero-line')
    lines.forEach((l, i) => {
      try {
        const drawable = createDrawable(l, 0, 0)
        animate(drawable, {
          draw: '0 1',
          duration: 1600,
          easing: 'easeInOutSine',
          delay: 700 + i * 200,
        })
      } catch (_) { /* ignore if element not drawable */ }
    })

    // Float the entire visual
    animate(root.querySelector('.hero-float'), {
      translateY: [0, -10],
      duration: 4200,
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
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-24 lg:pb-32 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2A1810 0%, #1A100B 45%, #120D09 100%)' }}
    >
      {/* Warm ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,95,50,0.20)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,154,75,0.10)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-terracotta opacity-[0.13] blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-gold-warm opacity-[0.09] blur-[110px] pointer-events-none" />

      {/* Subtle decorative sparkle top-left — very slow */}
      <FloatChip
        delay={0}
        className="absolute top-40 left-8 text-terracotta/20 text-4xl pointer-events-none hidden lg:block select-none"
      >
        ✦
      </FloatChip>
      <FloatChip
        delay={600}
        className="absolute bottom-32 left-1/4 text-gold-warm/15 text-2xl pointer-events-none hidden lg:block select-none"
      >
        ♡
      </FloatChip>

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <div className="hero-badge inline-flex" style={{ opacity: 0 }}>
              <span className="badge-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                Formação Profissional · {COURSE.date}
              </span>
            </div>

            {/* Title */}
            <h1
              className="h-display mt-7"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.25rem)', lineHeight: 1 }}
            >
              <span className="hero-title-line block font-bold text-warm-cream" style={{ opacity: 0 }}>
                Design de
              </span>
              <span className="hero-title-line block font-display italic text-terracotta-soft" style={{ opacity: 0 }}>
                Sobrancelhas
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="hero-sub mt-7 max-w-xl text-lg sm:text-xl text-warm-beige leading-relaxed font-bold"
              style={{ opacity: 0 }}
            >
              Uma formação para aprender com técnica, segurança e sensibilidade estética. ♡
            </p>

            <p
              className="hero-sub mt-4 max-w-lg text-base text-warm-beige/65 leading-relaxed font-medium"
              style={{ opacity: 0 }}
            >
              {COURSE.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta btn-primary shadow-2xl group"
                style={{ opacity: 0 }}
              >
                Quero inscrever-me ✨
                <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#programa"
                className="hero-cta btn-secondary group"
                style={{ opacity: 0 }}
              >
                Ver programa
                <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Meta strip */}
            <div
              className="mt-12 flex flex-wrap gap-x-8 gap-y-5 p-5 sm:p-6 rounded-3xl border border-white/10 backdrop-blur-md shadow-sm"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {[
                { k: 'Formação intensiva', v: 'Prática e Teoria' },
                { k: 'Especialização', v: 'Henna & Coloração' },
                { k: 'Método', v: 'Anderbrows ✦' },
              ].map((m, i) => (
                <div key={i} className="hero-meta" style={{ opacity: 0 }}>
                  <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
                    {m.k}
                  </div>
                  <div className="text-sm sm:text-base text-warm-cream font-bold mt-1">{m.v}</div>
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
        <span className="text-[10px] uppercase tracking-widest2 text-terracotta/70 font-bold">
          Explore ↓
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-terracotta/50 to-transparent" />
      </div>
    </section>
  )
}
