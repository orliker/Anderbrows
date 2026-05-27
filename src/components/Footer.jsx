import { CONTACT, BRAND } from '../constants/content.js'

export default function Footer() {
  return (
    <footer className="relative bg-chocolate text-warm-beige/65 pt-18 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center shadow-lg">
                <span className="font-display text-white text-2xl">A</span>
              </div>
              <div className="leading-none">
                <div className="font-display text-warm-cream text-3xl tracking-tight">{BRAND.name}</div>
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mt-1">
                  Beauty and Academy
                </div>
              </div>
            </div>
            <p className="mt-7 max-w-md text-base leading-relaxed text-warm-beige/80 font-medium">
              Formação profissional em Design de Sobrancelhas, Henna e Coloração no Porto.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mb-5">
              Contactos
            </div>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <a href={`tel:+${CONTACT.phoneRaw}`} className="hover:text-terracotta-soft transition-colors text-warm-cream">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-terracotta-soft transition-colors text-warm-cream">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-terracotta-soft transition-colors text-warm-cream">
                  Instagram {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mb-5">
              Localização
            </div>
            <p className="text-base leading-relaxed text-warm-cream font-medium">Porto, Portugal</p>
            <p className="mt-2 text-xs text-warm-beige/55 font-medium">
              Os detalhes exatos são comunicados após a confirmação da inscrição.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-warm-beige/50 font-bold">
          <div>© {new Date().getFullYear()} {BRAND.fullName}. Todos os direitos reservados.</div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <a
              href="/politica-privacidade-cookies.html"
              className="text-warm-beige/65 hover:text-terracotta-soft transition-colors"
            >
              Política de Privacidade e Cookies
            </a>
            <span className="hidden sm:block h-1 w-1 rounded-full bg-terracotta-soft/70" aria-hidden="true" />
            <div>Made in Porto</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
