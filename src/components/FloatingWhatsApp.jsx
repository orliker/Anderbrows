import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../constants/content.js'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar via WhatsApp"
      className={`fixed bottom-5 right-5 z-40 group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-mocha-900 text-cream-50 shadow-soft border border-champagne-500/30 transition-all duration-500 hover:bg-mocha-800 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="w-9 h-9 rounded-full bg-gold-grad flex items-center justify-center text-mocha-900">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z" strokeLinejoin="round" />
          <path d="M8.5 9.5c.5 2.5 3 5 5.5 5.5l1.5-1.5-2-1-1 .5c-1-.5-2-1.5-2.5-2.5l.5-1-1-2z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="hidden sm:inline text-sm font-medium tracking-wide">
        Reservar vaga
      </span>
    </a>
  )
}
