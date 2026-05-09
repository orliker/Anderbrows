# Anderbrows Beauty & Academy — Landing 2026

Landing page premium para a formação **Design de Sobrancelhas + Aplicação de Henna e Coloração — 2026**.

## Stack

- **Vite + React 18** — base ligeira e rápida
- **Tailwind CSS 3** — sistema de design e responsividade
- **Anime.js v4** — animações premium (timelines, stagger, count-up, SVG draw)

## Como executar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produção
npm run preview  # pré-visualizar build
```

## Estrutura

```
src/
├── App.jsx                  ← composição da página
├── main.jsx
├── styles/index.css         ← Tailwind + foundations premium
├── constants/content.js     ← TODO o copy/conteúdo (editar aqui!)
├── hooks/useReveal.js       ← reveal-on-scroll + count-up com Anime.js
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx + HeroVisual.jsx
    ├── Authority.jsx        ← 5 pilares
    ├── Audience.jsx         ← Para quem é
    ├── Curriculum.jsx       ← O que vai aprender (18 módulos)
    ├── Transformation.jsx   ← Antes / Depois
    ├── Earnings.jsx         ← 945€ / 1575€ com count-up
    ├── Included.jsx         ← O que está incluído
    ├── Trainers.jsx         ← Joana + Uander
    ├── Investment.jsx       ← Preços + ticket
    ├── FAQ.jsx              ← Acordeão
    ├── FinalCTA.jsx         ← CTA final
    ├── FloatingWhatsApp.jsx ← Botão flutuante
    └── Footer.jsx
```

## Como editar conteúdo

**99% dos textos** estão em [`src/constants/content.js`](./src/constants/content.js):

- `BRAND`, `CONTACT`, `WHATSAPP_URL`, `COURSE` — dados da marca/curso
- `PILLARS` — 5 conceitos (experiência, seriedade…)
- `AUDIENCE` — para quem é
- `CURRICULUM` — 18 módulos
- `TRANSFORMATION` — listas antes/depois
- `INCLUDED` — itens incluídos
- `TRAINERS` — bios da Joana e do Uander
- `FAQ_ITEMS` — perguntas e respostas

## Imagens

Foram usados SVGs decorativos elegantes em vez de fotografias para garantir uma preview impecável sem dependências externas. Para substituir por fotografia real:

- **Hero**: editar `src/components/HeroVisual.jsx`
- **Formadores**: substituir o bloco `font-display text-7xl` em `src/components/Trainers.jsx` por `<img>`

## Paleta

| Token | Valor |
|---|---|
| `cream-50` | `#FBF7F1` (off-white) |
| `cream-100..300` | nudes claros |
| `champagne-400..600` | dourado / bronze |
| `mocha-700..900` | mocha / preto suave |

Tudo configurado em `tailwind.config.js`.

## SEO

Meta título e descrição em PT-PT já configurados em `index.html`.
