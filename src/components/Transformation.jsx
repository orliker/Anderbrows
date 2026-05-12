import { TRANSFORMATION } from '../constants/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Transformation() {
  const ref = useReveal({ delayBetween: 80 })

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-chocolate">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,121,74,0.1)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="reveal-init">
            <span className="eyebrow center justify-center text-terracotta-soft">Antes e Depois</span>
          </div>
          <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-warm-cream">
            {TRANSFORMATION.title}
          </h2>
          <p className="reveal-init mt-6 text-warm-beige/80 text-base sm:text-lg leading-relaxed font-medium">
            {TRANSFORMATION.subtitle}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-8 lg:gap-12">
          {TRANSFORMATION.items.map((item, i) => (
            <div key={i} className="reveal-init group">
              <div className="relative aspect-[4/5] sm:aspect-[4/3] rounded-[32px] overflow-hidden bg-rich-black shadow-card transition-all duration-700 group-hover:shadow-2xl border border-white/10 group-hover:border-terracotta/30">
                
                {/* Premium Before/After Layout */}
                <div className="absolute inset-0 grid grid-cols-2">
                   {/* Before Side */}
                   <div className="relative overflow-hidden border-r border-white/10 bg-gradient-to-br from-chocolate to-rich-black">
                      <div className="absolute inset-0 flex flex-col items-center justify-center italic text-warm-beige/30 text-sm gap-2 font-medium">
                         <svg viewBox="0 0 24 24" className="w-6 h-6 opacity-30" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                         Imagem a adicionar
                      </div>
                      <div className="absolute top-6 left-6 bg-rich-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[9px] uppercase tracking-widest text-warm-beige font-bold shadow-soft">
                        {item.beforeText}
                      </div>
                   </div>
                   
                   {/* After Side */}
                   <div className="relative overflow-hidden bg-gradient-to-bl from-chocolate to-terracotta/10">
                      <div className="absolute inset-0 flex flex-col items-center justify-center italic text-terracotta-soft/50 text-sm gap-2 text-center px-4 font-medium">
                         <svg viewBox="0 0 24 24" className="w-6 h-6 opacity-40" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                         </svg>
                         Imagem a adicionar
                      </div>
                      <div className="absolute top-6 right-6 bg-terracotta/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-[9px] uppercase tracking-widest text-white font-bold shadow-soft">
                        {item.afterText} ✨
                      </div>
                   </div>
                </div>

                {/* Decorative center divider */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                   <div className="w-8 h-8 rounded-full bg-rich-black border border-white/10 shadow-lg flex items-center justify-center text-terracotta-soft z-10">
                     <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3">
                       <path d="M13 17l5-5-5-5M6 17l5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal-init">
           <p className="text-terracotta-soft/70 italic text-sm font-bold">
             Resultados reais obtidos através da aplicação rigorosa do método Anderbrows. ♡
           </p>
        </div>
      </div>
    </section>
  )
}
