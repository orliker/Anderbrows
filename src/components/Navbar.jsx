import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../constants/content.js'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#programa', label: 'Programa' },
  { href: '#incluido', label: 'Incluído' },
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
          ? 'bg-cream-50/85 backdrop-blur-md border-b border-cream-200/70 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-mocha-900 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <span className="font-display text-cream-50 text-lg">A</span>
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-champagne-500/40 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="leading-none">
            <div className="font-display text-mocha-900 text-lg tracking-wide">Anderbrows</div>
            <div className="text-[10px] uppercase tracking-widest2 text-mocha-700/70">
              Beauty &amp; Academy
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mocha-700 hover:text-mocha-900 transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-champagne-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-xs"
          >
            Reservar vaga
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full border border-mocha-900/20 flex items-center justify-center"
          >
            <span className="relative w-4 h-3 block">
              <span
                className={`absolute left-0 right-0 h-px bg-mocha-900 transition-all ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-mocha-900 top-1.5 transition-opacity ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-mocha-900 transition-all ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x py-6 flex flex-col gap-4 border-t border-cream-200 mt-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-mocha-800"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-2"
          >
            Reservar a minha vaga
          </a>
        </div>
      </div>
    </header>
  )
}
