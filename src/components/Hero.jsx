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
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-warm-beige"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,121,74,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full bg-terracotta opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-chocolate/10 blur-[100px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="hero-badge inline-flex" style={{ opacity: 0 }}>
              <span className="badge-pill !bg-white/80 !border-terracotta/40">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                Formação Profissional · {COURSE.date}
              </span>
            </div>

            <h1
              className="h-display mt-7 text-rich-black drop-shadow-sm"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.25rem)', lineHeight: 1 }}
            >
              <span className="hero-title-line block font-bold" style={{ opacity: 0 }}>
                Design de
              </span>
              <span className="hero-title-line block font-display italic text-terracotta drop-shadow-md" style={{ opacity: 0 }}>
                Sobrancelhas
              </span>
            </h1>

            <p
              className="hero-sub mt-7 max-w-xl text-lg sm:text-xl text-chocolate leading-relaxed font-bold"
              style={{ opacity: 0 }}
            >
              Uma formação para aprender com técnica, segurança e sensibilidade estética. ♡
            </p>

            <p
              className="hero-sub mt-4 max-w-lg text-base text-deep-brown leading-relaxed font-medium"
              style={{ opacity: 0 }}
            >
              {COURSE.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta btn-primary"
                style={{ opacity: 0 }}
              >
                Quero inscrever-me ✨
              </a>
              <a
                href="#programa"
                className="hero-cta btn-secondary !bg-white/50 hover:!bg-white"
                style={{ opacity: 0 }}
              >
                Ver programa
              </a>
            </div>

            {/* Meta strip */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6 p-6 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-md shadow-sm">
              {[
                { k: 'Formação intensiva', v: 'Prática e Teoria' },
                { k: 'Especialização', v: 'Henna & Coloração' },
                { k: 'Método', v: 'Anderbrows' },
              ].map((m, i) => (
                <div key={i} className="hero-meta" style={{ opacity: 0 }}>
                  <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
                    {m.k}
                  </div>
                  <div className="text-sm sm:text-base text-rich-black font-bold mt-1">{m.v}</div>
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
        <span className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
          Continue a explorar
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-terracotta to-transparent" />
      </div>
    </section>
  )
}
