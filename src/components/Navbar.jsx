import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../constants/content.js'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#programa', label: 'Programa' },
  { href: '#testemunhos', label: 'Depoimentos' },
  { href: '#formadores', label: 'Formadores' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-off-white/90 backdrop-blur-md border-b border-warm-beige/30 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-rich-black flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
              <span className="font-display text-off-white text-xl">A</span>
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-terracotta/40 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <div className="leading-none">
            <div className="font-display text-rich-black text-xl tracking-tight">Anderbrows</div>
            <div className="text-[9px] uppercase tracking-widest2 text-terracotta font-bold mt-0.5">
              Academy
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mocha-900 hover:text-terracotta transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-terracotta origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500" />
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
            Quero inscrever-me
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-full bg-rich-black text-white flex items-center justify-center shadow-md"
          >
            <span className="relative w-5 h-4 block">
              <span
                className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-white top-1.5 transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x py-8 flex flex-col gap-6 border-t border-warm-beige/30 mt-4 bg-off-white">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-display text-mocha-900 border-b border-warm-beige/20 pb-2"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-4 py-4"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
