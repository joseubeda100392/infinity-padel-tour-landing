import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Logoteca oficial — Infinity Padel Tour
        vibora:    '#00FB9F', // acento primario — CTAs, glow, neon
        willy:     '#088356', // color de marca — bordes, iconos, dividers
        dormilona: '#08462F', // base oscura — secciones alternadas
        balance:   '#EFDEC2', // neutro cálido — status, texto legal
        bandeja:   '#FFD48F', // dorado premium — eyebrow eventos, detalles
        chiquita:  '#FF7300', // naranja — CTAs secundarios, pílulas categoría
        // brand alias → Víbora para compatibilidad interna
        brand: {
          50:  '#edfff7',
          100: '#d0fff0',
          200: '#a4ffe4',
          300: '#64ffd4',
          400: '#3dfdb5',
          500: '#00FB9F', // Víbora
          600: '#00d985',
          700: '#088356', // Willy
          800: '#08462F', // Dormilona
          900: '#053020',
          950: '#021a11',
        },
      },
      fontFamily: {
        sans:      ['var(--font-anek)', 'system-ui', 'sans-serif'],
        display:   ['var(--font-anek)', 'system-ui', 'sans-serif'],
        condensed: ['var(--font-anek)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':       { transform: 'translate(20px,-15px) scale(1.05)' },
          '66%':       { transform: 'translate(-10px,10px) scale(0.97)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        'fade-up':          'fade-up 0.6s ease-out both',
        blob:               'blob 8s ease-in-out infinite',
        'blob-delay-2':     'blob 8s ease-in-out 2s infinite',
        'blob-delay-4':     'blob 8s ease-in-out 4s infinite',
        glow:               'glow 3s ease-in-out infinite',
        ping:               'ping 1s cubic-bezier(0,0,0.2,1) infinite',
      },
    },
  },
  plugins: [animate],
}

export default config
