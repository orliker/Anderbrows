import { CONTACT, BRAND } from '../constants/content.js'

export default function Footer() {
  return (
    <footer className="relative bg-chocolate text-warm-beige/60 pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-terracotta/5 blur-[120px] pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-terracotta to-terracotta-soft flex items-center justify-center shadow-lg border border-white/10">
                <span className="font-display text-white text-2xl">A</span>
              </div>
              <div className="leading-none">
                <div className="font-display text-warm-cream text-3xl tracking-tight">{BRAND.name}</div>
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mt-1">
                   Academy
                </div>
              </div>
            </div>
            <p className="mt-8 max-w-md text-base leading-relaxed text-warm-beige/80 font-medium">
              Formação profissional intensiva em Design de Sobrancelhas, Henna e Coloração. 
              Elevamos o padrão da estética com técnica, precisão e muita sensibilidade. ♡
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mb-6">
              Contactos
            </div>
            <ul className="space-y-4 text-base font-medium">
              <li>
                <a
                  href={`tel:+${CONTACT.phoneRaw}`}
                  className="hover:text-terracotta-soft transition-colors flex items-center gap-2 text-warm-cream"
                >
                  <span className="w-1 h-1 rounded-full bg-terracotta-soft" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-terracotta-soft transition-colors flex items-center gap-2 text-warm-cream"
                >
                  <span className="w-1 h-1 rounded-full bg-terracotta-soft" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta-soft transition-colors flex items-center gap-2 text-warm-cream"
                >
                  <span className="w-1 h-1 rounded-full bg-terracotta-soft" />
                  Instagram {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold mb-6">
              Localização
            </div>
            <p className="text-base leading-relaxed text-warm-cream font-medium">
              Porto, Portugal
            </p>
            <p className="mt-2 text-xs italic text-warm-beige/50 font-medium">
              Os detalhes exatos da localização são comunicados após a confirmação da inscrição.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-terracotta-soft animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold">
                Inscrições Abertas ✨
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-warm-beige/50 font-bold">
          <div>© {new Date().getFullYear()} {BRAND.fullName}. Todos os direitos reservados.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-terracotta-soft transition-colors">Política de Privacidade</a>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-terracotta-soft" />
              <span>Made with ♡ in Porto</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
