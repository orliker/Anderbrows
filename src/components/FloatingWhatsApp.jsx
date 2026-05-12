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
      className={`fixed bottom-6 right-6 z-40 group flex items-center gap-3 pl-5 pr-6 py-4 rounded-full bg-rich-black text-off-white shadow-2xl border border-terracotta/20 transition-all duration-700 hover:bg-terracotta hover:border-terracotta ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <span className="relative flex items-center justify-center w-6 h-6">
        <span className="absolute inset-0 bg-terracotta rounded-full animate-ping opacity-20" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.5A9 9 0 0 1 21 12z" strokeLinejoin="round" />
          <path d="M8.5 9.5c.5 2.5 3 5 5.5 5.5l1.5-1.5-2-1-1 .5c-1-.5-2-1.5-2.5-2.5l.5-1-1-2z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest leading-none">
        Falar agora
      </span>
    </a>
  )
}
