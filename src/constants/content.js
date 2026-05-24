// Conteúdo centralizado para facilitar ajustes rápidos com o cliente.

export const BRAND = {
  name: 'Anderbrows',
  fullName: 'Anderbrows Beauty and Academy',
  city: 'Porto, Portugal',
  year: '2026',
}

export const CONTACT = {
  phoneDisplay: '+351 938 106 435',
  phoneRaw: '351938106435',
  email: 'info@anderbrows.com',
  website: 'www.anderbrows.com',
  instagram: '@anderbrows',
  instagramUrl: 'https://instagram.com/anderbrows',
}

export const WHATSAPP_URL =
  'https://wa.me/351938106435?text=' +
  encodeURIComponent(
    'Olá, gostaria de saber mais sobre a formação de Design de Sobrancelhas com aplicação de henna e coloração.'
  )

export const COURSE = {
  title: 'Design de Sobrancelhas',
  subtitle: 'Formação profissional intensiva em aplicação de henna e coloração.',
  description:
    'Aprenda a desenhar sobrancelhas com método, precisão e segurança: do mapeamento facial à finalização com henna ou coloração.',
  date: '13 de julho',
  city: 'Porto',
  priceBase: 490,
  priceWithKit: 540,
  inscription: 100,
}

export const PILLARS = [
  {
    label: 'Experiência',
    text: 'Mais de 10 anos a formar profissionais e a executar procedimentos na área da beleza.',
  },
  {
    label: 'Método',
    text: 'Mapeamento, visagismo, simetria e leitura facial aplicados passo a passo.',
  },
  {
    label: 'Prática real',
    text: 'A formanda treina com orientação direta para ganhar mão, ritmo e confiança.',
  },
  {
    label: 'Acompanhamento',
    text: 'Suporte após a formação para continuar a evoluir com mais clareza.',
  },
]

export const AUDIENCE = [
  {
    title: 'Iniciantes',
    text: 'Para quem quer começar na área com base técnica, postura profissional e segurança.',
  },
  {
    title: 'Profissionais da beleza',
    text: 'Para quem já atende clientes e quer acrescentar um serviço procurado e recorrente.',
  },
  {
    title: 'Nova carreira',
    text: 'Para quem procura uma formação prática, vendável e com potencial de retorno.',
  },
  {
    title: 'Base para evoluir',
    text: 'Uma porta de entrada sólida para futuras especializações em micropigmentação.',
  },
]

export const CURRICULUM = [
  {
    title: 'Fundamentos',
    items: [
      'Introdução ao design de sobrancelhas',
      'Visagismo aplicado ao rosto',
      'Tipos de pele e preparação',
      'Higienização, biossegurança e ética',
    ],
  },
  {
    title: 'Método Anderbrows',
    items: [
      'Atendimento e ficha da cliente',
      'Materiais e organização da bancada',
      'Leitura facial e proporção',
      'Design técnico com marcações',
    ],
  },
  {
    title: 'Design e Simetria',
    items: [
      'Marcação com linha e paquímetro',
      'Design feminino e masculino',
      'Correção visual de assimetrias',
      'Finalização limpa e natural',
    ],
  },
  {
    title: 'Henna e Coloração',
    items: [
      'Preparação correta da pele',
      'Escolha de tom e intensidade',
      'Aplicação, tempo de pausa e remoção',
      'Cuidados pós-procedimento',
    ],
  },
]

export const TRANSFORMATION = {
  title: 'Antes e depois com leitura técnica',
  subtitle:
    'A formação mostra como construir um desenho coerente com o rosto, respeitando naturalidade, simetria e intenção estética.',
  items: [
    {
      label: 'Correção de desenho',
      text: 'Do fio disperso a uma sobrancelha mais preenchida, alinhada e elegante.',
      image: '/images/anderbrows/before-after-precision-01.jpg',
    },
    {
      label: 'Henna natural',
      text: 'Mais definição sem perder leveza no olhar.',
      image: '/images/anderbrows/before-after-precision-02.jpg',
    },
    {
      label: 'Arquitetura do olhar',
      text: 'Mapeamento visual para criar estrutura, cauda e arco com precisão.',
      image: '/images/anderbrows/before-after-precision-03.jpg',
    },
  ],
}

export const TESTIMONIALS = [
  {
    name: 'Formanda Anderbrows',
    text: 'Saí da formação com uma técnica organizada e com muito mais segurança para atender.',
    stars: 5,
  },
  {
    name: 'Formanda Anderbrows',
    text: 'A parte prática fez toda a diferença. Dá para perceber cada detalhe do método.',
    stars: 5,
  },
  {
    name: 'Formanda Anderbrows',
    text: 'O acompanhamento é próximo, direto e profissional. Recomendo para quem quer começar bem.',
    stars: 5,
  },
  {
    name: 'Formanda Anderbrows',
    text: 'Gostei especialmente da clareza no mapeamento e da forma como corrigimos assimetrias.',
    stars: 5,
  },
]

export const INCLUDED = [
  { icon: 'theory', t: 'Formação intensiva', d: 'Teoria aplicada e prática guiada com método Anderbrows.' },
  { icon: 'practice', t: 'Prática em modelo', d: 'Aplicação real assistida para consolidar a técnica.' },
  { icon: 'manual', t: 'Manual de apoio', d: 'Material didático para estudar e consultar depois.' },
  { icon: 'cert', t: 'Certificado', d: 'Certificado de participação ao concluir a formação.' },
  { icon: 'whatsapp', t: 'Suporte pós-formação', d: 'Canal direto para esclarecer dúvidas e continuar a evoluir.' },
  { icon: 'kit', t: 'Opção com kit', d: 'Kit disponível para iniciar os primeiros 20 a 30 procedimentos.' },
]

export const TRAINERS = [
  {
    name: 'Uander Machado',
    role: 'Formador principal · CEO da Anderbrows Beauty and Academy',
    bio: 'Master em Design de Sobrancelhas, Micropigmentação, Microblading e Nanoblading. Soma mais de 10 anos de experiência em procedimentos e formações.',
    initials: 'UM',
    image: '/images/anderbrows/uander.jpeg',
  },
  {
    name: 'Joana Barreira',
    role: 'Formadora · Anderbrows Beauty and Academy',
    bio: 'Especialista em Design de Sobrancelhas, henna, coloração, Microblading, Nanoblading, Lifting de Pestanas e Brow Lamination.',
    initials: 'JB',
    image: '/images/anderbrows/joana.jpeg',
  },
]

export const FAQ_ITEMS = [
  {
    q: 'Preciso ter experiência?',
    a: 'Não. A formação foi pensada para iniciantes e também para profissionais que desejam aperfeiçoar a técnica.',
  },
  {
    q: 'A formação inclui prática?',
    a: 'Sim. A formação inclui prática orientada para aplicar o método com segurança e acompanhamento.',
  },
  {
    q: 'Recebo certificado?',
    a: 'Sim. No final da formação recebe certificado de participação.',
  },
  {
    q: 'O kit está incluído?',
    a: 'Existe a opção Formação + Kit, indicada para quem quer iniciar com material para realizar entre 20 e 30 procedimentos.',
  },
  {
    q: 'Posso fazer apenas a formação?',
    a: 'Sim. Pode escolher a opção apenas formação ou a opção completa com kit profissional.',
  },
  {
    q: 'A modelo está incluída?',
    a: 'Não. A modelo é da responsabilidade da formanda e deve cumprir os critérios indicados na página.',
  },
  {
    q: 'Onde será a formação?',
    a: 'A formação decorre no Porto. Os detalhes finais do local são comunicados após confirmação da inscrição.',
  },
  {
    q: 'Como faço a inscrição?',
    a: 'Pode reservar a sua vaga pelo WhatsApp e receber as orientações para pagamento da inscrição.',
  },
]
