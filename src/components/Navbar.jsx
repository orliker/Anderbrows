import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../constants/content.js'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#programa', label: 'Programa' },
  { href: '#formacao', label: 'Formação' },
  { href: '#testemunhos', label: 'Testemunhos' },
  { href: '#formadores', label: 'Formadores' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const closeOnHashChange = () => setOpen(false)
    window.addEventListener('hashchange', closeOnHashChange)
    return () => window.removeEventListener('hashchange', closeOnHashChange)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b py-3 transition-all duration-500 ${
      scrolled || open
        ? 'bg-off-white/95 backdrop-blur-xl border-terracotta/10 nav-glow'
        : 'bg-off-white/95 backdrop-blur-md border-warm-beige/40'
    }`}>
      <div className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-rich-black flex items-center justify-center transition-all duration-700 group-hover:rotate-[360deg] group-hover:shadow-[0_0_0_6px_rgba(196,95,50,0.12)]">
            <span className="font-display text-off-white text-xl">A</span>
          </div>
          <div className="leading-none">
            <div className="font-display text-rich-black text-xl tracking-tight">Anderbrows</div>
            <div className="text-[9px] uppercase tracking-widest2 text-terracotta font-bold mt-0.5">
              Academy
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-2 rounded-full border border-terracotta/10 bg-white/40 px-3 py-2 shadow-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-mocha-900 hover:text-terracotta transition-all duration-300 relative group rounded-full px-4 py-2 hover:bg-warm-cream/80"
            >
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-terracotta origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-6 !text-xs shadow-lg"
          >
            Reservar vaga
          </a>
          <button
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-full bg-rich-black text-white flex items-center justify-center shadow-md transition-all duration-300 active:scale-95 hover:shadow-[0_0_0_6px_rgba(196,95,50,0.14)]"
          >
            <span className="relative w-5 h-4 block">
              <span className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-white top-1.5 transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? 'max-h-[calc(100vh-68px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x pt-5 pb-7">
          <div className="relative overflow-hidden rounded-[28px] border border-terracotta/20 bg-warm-cream/95 shadow-2xl">
            <div className="absolute inset-0 bg-noise opacity-35 pointer-events-none" />
            <div className="relative p-5">
              <div className="mb-4 rounded-[20px] border border-terracotta/20 bg-off-white/80 px-5 py-4">
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
                  Anderbrows Academy
                </div>
                <p className="mt-2 text-sm text-deep-brown/75 font-medium leading-relaxed">
                  Formação prática, próxima e cuidada no Porto.
                </p>
              </div>

              <div className="grid gap-2">
                {links.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
                    className={`group flex items-center justify-between rounded-[18px] border border-transparent bg-white/45 px-5 py-4 font-display text-xl text-mocha-900 transition-all duration-500 hover:border-terracotta/25 hover:bg-white ${
                      open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                    style={{ transitionDelay: open ? `${index * 45}ms` : '0ms' }}
            >
                    <span>{l.label}</span>
                    <span aria-hidden="true" className="font-sans text-xs text-terracotta opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      abrir
                    </span>
            </a>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center mt-5 py-4"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
