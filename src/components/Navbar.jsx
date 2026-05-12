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
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
      style={scrolled ? {
        background: 'rgba(26,16,11,0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(196,95,50,0.15)',
        boxShadow: '0 8px 40px -8px rgba(18,13,9,0.60)',
      } : {
        /* Gradient so header fades into hero seamlessly */
        background: 'linear-gradient(to bottom, rgba(18,13,9,0.70) 0%, rgba(18,13,9,0.20) 70%, transparent 100%)',
      }}
    >
      <div className="container-x flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Anderbrows Academy">
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-rich-black border border-terracotta/30 flex items-center justify-center transition-all duration-700 group-hover:rotate-[360deg] group-hover:border-terracotta/70 shadow-md">
              <span className="font-display text-warm-cream text-xl">A</span>
            </div>
            <div className="absolute inset-0 rounded-full ring-1 ring-terracotta/40 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-tight text-warm-cream">Anderbrows</div>
            <div className="text-[9px] uppercase tracking-widest2 text-terracotta font-bold mt-0.5">
              Academy ✦
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-warm-beige/75 hover:text-terracotta transition-colors duration-300 relative group"
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
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-full bg-rich-black/80 border border-white/10 text-white flex items-center justify-center shadow-md hover:border-terracotta/40 transition-all duration-300"
          >
            <span className="relative w-5 h-4 block">
              <span className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-white top-1.5 transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
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
        <div
          className="container-x py-8 flex flex-col gap-5 border-t border-white/10 mt-4"
          style={{ background: 'rgba(18,13,9,0.97)', backdropFilter: 'blur(20px)' }}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-display text-warm-cream border-b border-white/8 pb-3 hover:text-terracotta transition-colors duration-300"
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center mt-3 py-4"
          >
            Falar no WhatsApp ♡
          </a>
        </div>
      </div>
    </header>
  )
}
