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
        vibora:    '#00FB9F',
        willy:     '#088356',
        dormilona: '#08462F',
        balance:   '#EFDEC2',
        bandeja:   '#FFD48F',
        chiquita:  '#FF7300',
      },
      fontFamily: {
        sans:    ['var(--font-ubuntu)', 'system-ui', 'sans-serif'],
        display: ['var(--font-ubuntu)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [animate],
}

export default config
