/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#120D09',
        'soft-black': '#18110D',
        'chocolate': '#1A100B',
        'deep-brown': '#2A1810',
        'terracotta': {
          DEFAULT: '#C45F32',
          warm: '#C46A3A',
          soft: '#D9794A',
        },
        'burnt-orange': '#B9552A',
        'gold': {
          warm: '#C89A4B',
          matte: '#C89A4B',
          light: '#E1B96B',
        },
        'warm-beige': '#F3E3C9',
        'warm-cream': '#FFF3E2',
        'burnt-pink': '#D8A08A',
        'off-white': '#FAF6EF',
        cream: {
          50:  '#FFF3E2', // warm-cream
          100: '#F3E3C9', // warm-beige
          200: '#EBE0CC',
          300: '#DBC9A8',
        },
        champagne: {
          400: '#E1B96B', // gold-light
          500: '#C89A4B', // gold-matte
          600: '#8A6A41',
        },
        mocha: {
          500: '#B9552A', // burnt-orange
          700: '#2A1810', // deep-brown
          800: '#1A100B', // chocolate
          900: '#120D09', // rich-black
        },
        rosegold: '#D8A08A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      boxShadow: {
        'soft': '0 30px 60px -25px rgba(59, 42, 32, 0.25)',
        'card': '0 20px 50px -20px rgba(59, 42, 32, 0.20)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #C8A772 0%, #E5CDA1 50%, #B08A5B 100%)',
        'cream-grad': 'linear-gradient(180deg, #FBF7F1 0%, #F6EFE3 100%)',
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
