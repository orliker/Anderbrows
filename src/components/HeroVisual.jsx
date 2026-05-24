export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[350px] sm:max-w-sm lg:max-w-md mx-auto">
      <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl bg-rich-black border border-white/40">
        <img
          src="/images/anderbrows/practice-mapping.jpg"
          alt="Prática de mapeamento de sobrancelhas com paquímetro"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 47%' }}
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/72 via-transparent to-rich-black/10 pointer-events-none" />
        <div className="absolute left-5 right-5 bottom-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-widest2 text-warm-beige/80 font-bold">
                Prática orientada
              </div>
              <div className="font-display text-2xl text-white leading-none mt-1">
                Mapeamento preciso
              </div>
            </div>
            <div className="hidden sm:block text-[10px] uppercase tracking-widest2 text-warm-beige/75 font-bold">
              Anderbrows
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 -left-5 sm:-left-8 w-36 sm:w-44 aspect-[4/5] rounded-[20px] overflow-hidden border-4 border-warm-beige shadow-xl bg-white">
        <img
          src="/images/anderbrows/kit-editorial.jpg"
          alt="Kit e materiais da formação Anderbrows"
          className="w-full h-full object-cover"
          style={{ objectPosition: '42% 45%' }}
          loading="eager"
        />
      </div>

      <div className="absolute -top-5 -right-4 sm:-right-7 bg-off-white border border-terracotta/20 shadow-xl rounded-[18px] px-4 py-3">
        <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
          13 julho
        </div>
        <div className="font-display text-xl leading-none text-rich-black mt-1">Porto</div>
      </div>
    </div>
  )
}
