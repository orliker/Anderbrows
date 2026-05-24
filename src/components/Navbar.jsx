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

  useEffect(() => {
    const closeOnHashChange = () => setOpen(false)
    window.addEventListener('hashchange', closeOnHashChange)
    return () => window.removeEventListener('hashchange', closeOnHashChange)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/95 backdrop-blur-md border-b border-warm-beige/40 py-3 shadow-sm">
      <div className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-rich-black flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
            <span className="font-display text-off-white text-xl">A</span>
          </div>
          <div className="leading-none">
            <div className="font-display text-rich-black text-xl tracking-tight">Anderbrows</div>
            <div className="text-[9px] uppercase tracking-widest2 text-terracotta font-bold mt-0.5">
              Academy
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-mocha-900 hover:text-terracotta transition-colors relative group"
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
            Reservar vaga
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-full bg-rich-black text-white flex items-center justify-center shadow-md"
          >
            <span className="relative w-5 h-4 block">
              <span className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-white top-1.5 transition-opacity duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-white transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-x py-8 flex flex-col gap-6 border-t border-warm-beige/30 mt-4 bg-off-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg font-display text-mocha-900 border-b border-warm-beige/30 pb-2"
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center mt-4 py-4">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
