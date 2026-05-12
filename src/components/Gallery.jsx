export default function Gallery() {
  return (
    <section className="relative py-20 sm:py-28 bg-deep-brown overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-chocolate/40 blur-[120px] pointer-events-none" />
      
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal-init">
             <span className="eyebrow center justify-center text-terracotta-soft">Bastidores</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-warm-cream">
             O ambiente da nossa <em className="not-italic italic gold-text">formação</em>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]">
          {/* Large main photo */}
          <div className="col-span-2 row-span-2 relative rounded-[32px] overflow-hidden bg-chocolate border border-terracotta/20 group hover:border-terracotta/50 transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-tr from-rich-black/60 to-terracotta/10" />
             <div className="absolute inset-0 flex flex-col items-center justify-center italic text-warm-beige/40 font-medium gap-3">
               <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                 <circle cx="8.5" cy="8.5" r="1.5"/>
                 <polyline points="21 15 16 10 5 21"/>
               </svg>
               Foto da formação / ambiente
             </div>
             <div className="absolute bottom-6 left-6 px-5 py-2 bg-rich-black/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-warm-beige font-bold shadow-lg">
               Ambiente de aula ✨
             </div>
          </div>

          {/* Small photo 1 */}
          <div className="relative rounded-[24px] overflow-hidden bg-rich-black border border-white/5 group hover:border-terracotta/30 transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-terracotta/20" />
             <div className="absolute inset-0 flex items-center justify-center text-center px-4 italic text-terracotta-soft/60 text-sm font-medium">
               Detalhe do kit
             </div>
          </div>

          {/* Small photo 2 */}
          <div className="relative rounded-[24px] overflow-hidden bg-chocolate border border-white/5 group hover:border-gold-light/30 transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-gold-warm/10" />
             <div className="absolute inset-0 flex items-center justify-center text-center px-4 italic text-gold-warm/60 text-sm font-medium">
               Prática em modelo
             </div>
          </div>

          {/* Wide photo */}
          <div className="col-span-2 relative rounded-[24px] overflow-hidden bg-rich-black border border-white/5 group hover:border-terracotta/30 transition-all duration-500">
             <div className="absolute inset-0 bg-gradient-to-r from-chocolate/40 to-transparent" />
             <div className="absolute inset-0 flex items-center justify-center text-center px-4 italic text-warm-beige/40 font-medium">
               Turma e certificados ♡
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
