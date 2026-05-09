import { CONTACT, BRAND } from '../constants/content.js'

export default function Footer() {
  return (
    <footer className="relative bg-mocha-900 text-cream-200/80 pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-champagne-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gold-grad flex items-center justify-center">
                <span className="font-display text-mocha-900 text-xl">A</span>
              </div>
              <div className="leading-none">
                <div className="font-display text-cream-50 text-2xl">{BRAND.name}</div>
                <div className="text-[10px] uppercase tracking-widest2 text-cream-200/60">
                  Beauty &amp; Academy
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed">
              Formação profissional em Design de Sobrancelhas, Henna e Coloração no Porto.
              Técnica, ética e apoio vitalício para a sua carreira na beleza.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-widest2 text-champagne-400 mb-4">
              Contactos
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+${CONTACT.phoneRaw}`}
                  className="hover:text-cream-50 transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-cream-50 transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://${CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-50 transition-colors"
                >
                  {CONTACT.website}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-50 transition-colors"
                >
                  Instagram {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-widest2 text-champagne-400 mb-4">
              Morada
            </div>
            <p className="text-sm leading-relaxed">
              {CONTACT.address}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-champagne-400" />
              <span className="text-[10px] uppercase tracking-widest2 text-cream-200/60">
                Estúdio aberto com marcação
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream-50/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60">
          <div>© {new Date().getFullYear()} {BRAND.fullName}. Todos os direitos reservados.</div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-champagne-400" />
            <span>Feito com cuidado no Porto</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
