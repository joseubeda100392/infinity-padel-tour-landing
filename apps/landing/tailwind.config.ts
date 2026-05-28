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
        brand: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#F5501E',
          600: '#D43D10',
          700: '#b91c1c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
