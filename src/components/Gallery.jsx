import { useReveal } from '../hooks/useReveal.js'

const images = [
  {
    src: '/images/anderbrows/student-certificates.jpg',
    title: 'Foto da formação 👩‍🎓',
    caption: 'Turma, certificados e aquele orgulho bom de terminar uma etapa.',
    className: 'lg:col-span-7 min-h-[360px] sm:min-h-[520px]',
    position: 'center 42%',
  },
  {
    src: '/images/anderbrows/uander.jpeg',
    title: 'Formador principal',
    caption: 'Acompanhamento técnico direto durante a formação.',
    className: 'lg:col-span-5 min-h-[360px] sm:min-h-[520px]',
    position: 'center 36%',
  },
  {
    src: '/images/anderbrows/joana.jpeg',
    title: 'Formadora Anderbrows',
    caption: 'Presença, cuidado e detalhe no acompanhamento das alunas.',
    className: 'lg:col-span-12 min-h-[320px] sm:min-h-[430px]',
    position: 'center 34%',
  },
]

export default function Gallery() {
  const ref = useReveal({ delayBetween: 85 })

  return (
    <section id="formacao" ref={ref} className="relative py-16 sm:py-24 bg-warm-cream studio-edge-light studio-hairline overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-9">
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
              className={`reveal-init image-glint relative rounded-[24px] overflow-hidden bg-rich-black border border-white/60 shadow-card group ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                style={{ objectPosition: image.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/18 via-transparent to-transparent pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
