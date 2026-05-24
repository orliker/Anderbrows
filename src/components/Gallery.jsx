const images = [
  {
    src: '/images/anderbrows/student-certificates.jpg',
    title: 'Foto da formação 👩‍🎓',
    caption: 'Turma, certificados e aquele orgulho bom de terminar uma etapa.',
    className: 'lg:col-span-7 min-h-[360px] sm:min-h-[520px]',
    position: 'center 42%',
  },
  {
    src: '/images/anderbrows/kit-editorial.jpg',
    title: 'Kit de trabalho',
    caption: 'Material bonito, organizado e pronto para os primeiros atendimentos.',
    className: 'lg:col-span-5 min-h-[250px] sm:min-h-[250px]',
    position: 'center 44%',
  },
  {
    src: '/images/anderbrows/practice-mapping.jpg',
    title: 'Prática em modelo',
    caption: 'Marcação com paquímetro, orientação e correção ao vivo.',
    className: 'lg:col-span-3 min-h-[250px]',
    position: 'center 48%',
  },
  {
    src: '/images/anderbrows/hero-brow-closeup.jpg',
    title: 'Acabamento',
    caption: 'Um resultado limpo, natural e muito fotografável.',
    className: 'lg:col-span-4 min-h-[250px]',
    position: 'center 48%',
  },
  {
    src: '/images/anderbrows/before-after-precision-02.jpg',
    title: 'Resultado real',
    caption: 'Antes e depois para treinar olho, técnica e bom senso.',
    className: 'lg:col-span-5 min-h-[250px]',
    position: 'center 50%',
  },
]

export default function Gallery() {
  return (
    <section id="formacao" className="relative py-16 sm:py-24 bg-warm-cream overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-10">
          <div className="lg:col-span-7">
            <div className="reveal-init">
              <span className="eyebrow text-terracotta">Por dentro da formação</span>
            </div>
            <h2 className="reveal-init h-display mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-rich-black">
              Uma turma pequena, prática real e um ambiente próximo.
            </h2>
          </div>
          <p className="reveal-init lg:col-span-5 text-deep-brown/75 text-base sm:text-lg leading-relaxed font-medium">
            Aqui não é só uma aula bonita no papel. É mão na massa, correção lado a lado, certificado no final e aquela sensação de “agora eu consigo”. 🤎
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5">
          {images.map((image) => (
            <article
              key={image.src}
              className={`reveal-init relative rounded-[24px] overflow-hidden bg-rich-black border border-white/60 shadow-card group ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                style={{ objectPosition: image.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/58 via-rich-black/5 to-transparent pointer-events-none" />
              <div className="absolute left-5 right-5 bottom-5">
                <div className="text-[10px] uppercase tracking-widest2 text-terracotta-soft font-bold">
                  {image.title}
                </div>
                <p className="mt-1 max-w-md text-sm sm:text-base text-warm-cream font-semibold leading-tight">
                  {image.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
