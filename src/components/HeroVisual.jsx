/**
 * Hero visual — premium photo composition with editorial framing.
 */
export default function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[320px] sm:max-w-sm lg:max-w-md mx-auto">
      {/* Decorative gold frames */}
      <div className="absolute -inset-3 sm:-inset-4 rounded-[28px] border border-champagne-500/30" />
      <div className="absolute -inset-1 rounded-[22px] border border-champagne-500/15" />

      {/* Main photo card */}
      <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-soft bg-cream-100">
        <img
          src="/images/anderbrows/brow-design-closeup-02.png"
          alt="Close-up profissional de sobrancelha — método Anderbrows"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '40% 50%' }}
          fetchpriority="high"
        />

        {/* Soft warm tint on top */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-400/10 via-transparent to-mocha-900/30 mix-blend-multiply pointer-events-none" />

        {/* Inner ring */}
        <div className="absolute inset-0 ring-1 ring-inset ring-mocha-900/10 rounded-[20px] pointer-events-none" />

        {/* Brand stamp */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
          <div className="text-[9px] uppercase tracking-widest2 text-cream-50/85 drop-shadow">Método</div>
          <div className="font-display italic text-cream-50 text-base drop-shadow">Anderbrows</div>
        </div>

        {/* Bottom caption with subtle gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-mocha-900/80 via-mocha-900/30 to-transparent">
          <div className="flex items-center justify-between">
            <div className="text-[9px] uppercase tracking-widest2 text-cream-50/90">
              Visagismo · Henna · Coloração
            </div>
            <div className="text-[9px] uppercase tracking-widest2 text-cream-50/90">2026</div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-4 sm:-left-6 top-12 px-3 py-2 rounded-full bg-white shadow-card border border-cream-200 text-[10px] uppercase tracking-widest2 text-mocha-800">
        ✦ Visagismo
      </div>
      <div className="absolute -right-3 sm:-right-5 bottom-24 px-3 py-2 rounded-full bg-mocha-900 text-cream-50 shadow-card text-[10px] uppercase tracking-widest2">
        ✦ Henna
      </div>
      <div className="absolute -bottom-4 left-10 px-3 py-2 rounded-full bg-gold-grad text-mocha-900 shadow-card text-[10px] uppercase tracking-widest2 font-medium">
        Certificado oficial
      </div>
    </div>
  )
}
