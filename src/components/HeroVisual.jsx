export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[350px] sm:max-w-[440px] lg:max-w-[520px] xl:max-w-[560px] mx-auto">
      <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl bg-rich-black border border-white/40">
        <img
          src="/images/anderbrows/student-certificates.jpg"
          alt="Turma Anderbrows com certificados da formação"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 42%' }}
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rich-black/18 via-transparent to-rich-black/5 pointer-events-none" />
      </div>

      <div className="absolute -bottom-8 -left-5 sm:-left-8 lg:-bottom-10 lg:-left-10 w-40 sm:w-48 lg:w-56 rounded-[20px] border-4 border-warm-beige bg-off-white px-5 py-4 shadow-xl">
        <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
          Turma limitada
        </div>
        <p className="mt-2 font-display text-2xl leading-none text-rich-black">
          acompanhamento próximo
        </p>
      </div>

      <div className="absolute -top-5 -right-4 sm:-right-7 lg:-right-10 bg-off-white border border-terracotta/20 shadow-xl rounded-[18px] px-4 py-3">
        <div className="text-[10px] uppercase tracking-widest2 text-terracotta font-bold">
          13 julho
        </div>
        <div className="font-display text-xl leading-none text-rich-black mt-1">Porto</div>
      </div>
    </div>
  )
}
