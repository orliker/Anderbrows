/**
 * Hero visual — premium photo composition with editorial framing.
 */
export default function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[320px] sm:max-w-sm lg:max-w-md mx-auto">
      {/* Decorative frames */}
      <div className="absolute -inset-4 rounded-[40px] border border-terracotta/20" />
      <div className="absolute -inset-2 rounded-[32px] border border-terracotta/10" />

      {/* Main photo card */}
      <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-2xl bg-warm-beige/20">
        <img
          src="/images/anderbrows/brow-design-closeup-02.png"
          alt="Close-up profissional de sobrancelha — método Anderbrows"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          style={{ objectPosition: 'center 50%' }}
          fetchpriority="high"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 via-transparent to-rich-black/40 pointer-events-none" />

        {/* Brand stamp */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest2 text-white/90 font-bold drop-shadow-lg">Método</div>
          <div className="font-display italic text-white text-xl drop-shadow-lg">Anderbrows</div>
        </div>

        {/* Bottom caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-rich-black/90 via-rich-black/30 to-transparent">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-widest2 text-white/90 font-bold">
              Visagismo · Henna · Coloração
            </div>
            <div className="text-[10px] uppercase tracking-widest2 text-white/90 font-bold">2026</div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-6 sm:-left-8 top-12 px-4 py-2 rounded-full bg-white shadow-xl border border-warm-beige text-[10px] uppercase tracking-widest2 text-mocha-900 font-bold">
        ✦ Visagismo
      </div>
      <div className="absolute -right-4 sm:-right-6 bottom-24 px-4 py-2 rounded-full bg-rich-black text-white shadow-xl text-[10px] uppercase tracking-widest2 font-bold border border-white/10">
        ✦ Henna
      </div>
      <div className="absolute -bottom-6 left-12 px-4 py-2 rounded-full bg-terracotta text-white shadow-xl text-[10px] uppercase tracking-widest2 font-bold">
        Certificado oficial
      </div>
    </div>
  )
}
