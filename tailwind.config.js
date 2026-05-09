/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FBF7F1',
          100: '#F6EFE3',
          200: '#EBE0CC',
          300: '#DBC9A8',
        },
        champagne: {
          400: '#C8A772',
          500: '#B08A5B',
          600: '#8A6A41',
        },
        mocha: {
          500: '#6B4F3A',
          700: '#3B2A20',
          800: '#26190F',
          900: '#15100A',
        },
        rosegold: '#C9A07F',
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
