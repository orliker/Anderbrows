export default function Gallery() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: '#2A1810' }}>
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-terracotta/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-warm/8 blur-[100px] pointer-events-none" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow center justify-center text-terracotta">Bastidores</span>
          <h2 className="h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-warm-cream">
            O ambiente da nossa <em className="not-italic italic gold-text">formação</em>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]">

          {/* Large main — col-span-2 row-span-2 */}
          <div className="col-span-2 row-span-2 relative rounded-[32px] overflow-hidden border border-terracotta/30 group hover:border-terracotta/70 transition-all duration-500 shadow-xl"
            style={{ background: '#1A100B' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-rich-black/80 via-chocolate/40 to-terracotta/8 pointer-events-none" />
            {/* Placeholder icon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-2xl border border-terracotta/40 flex items-center justify-center bg-terracotta/10">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-terracotta/60" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <p className="text-warm-beige/50 text-sm font-medium italic text-center px-4">
                Foto do ambiente de formação
              </p>
            </div>
            {/* Label bottom */}
            <div className="absolute bottom-6 left-6 px-5 py-2 bg-rich-black/90 backdrop-blur-md border border-terracotta/30 rounded-full text-[10px] uppercase tracking-widest text-warm-beige font-bold shadow-lg">
              ✦ Ambiente de aula
            </div>
          </div>

          {/* Small 1 */}
          <div className="relative rounded-[24px] overflow-hidden border border-terracotta/20 group hover:border-terracotta/60 transition-all duration-500 shadow-lg"
            style={{ background: '#120D09' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-terracotta/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
              <div className="w-10 h-10 rounded-xl border border-terracotta/40 flex items-center justify-center bg-terracotta/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-terracotta/70" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-terracotta-soft text-xs font-bold uppercase tracking-widest text-center">
                Detalhe do kit
              </span>
            </div>
          </div>

          {/* Small 2 */}
          <div className="relative rounded-[24px] overflow-hidden border border-gold-warm/20 group hover:border-gold-warm/50 transition-all duration-500 shadow-lg"
            style={{ background: '#1A100B' }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-gold-warm/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
              <div className="w-10 h-10 rounded-xl border border-gold-warm/40 flex items-center justify-center bg-gold-warm/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-warm" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className="text-gold-warm text-xs font-bold uppercase tracking-widest text-center">
                Prática em modelo
              </span>
            </div>
          </div>

          {/* Wide photo */}
          <div className="col-span-2 relative rounded-[24px] overflow-hidden border border-warm-beige/10 group hover:border-terracotta/40 transition-all duration-500 shadow-lg"
            style={{ background: '#120D09' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-terracotta/8 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              <div className="w-10 h-10 rounded-xl border border-warm-beige/20 flex items-center justify-center bg-warm-beige/5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-warm-beige/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <span className="text-warm-beige/50 text-sm font-medium italic">Turma e certificados ♡</span>
            </div>
          </div>

        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-xs text-warm-beige/35 uppercase tracking-widest font-bold">
          ✦ Fotos reais a serem adicionadas em breve ✦
        </p>
      </div>
    </section>
  )
}
