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
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#bffe92',
          500: '#a7fd7e',
          600: '#7ce849',
          700: '#5cb829',
          800: '#3f8c18',
          900: '#275c0d',
          950: '#133006',
        },
      },
      fontFamily: {
        sans:      ['var(--font-ubuntu)', 'system-ui', 'sans-serif'],
        display:   ['var(--font-bebas)', 'Impact', 'sans-serif'],
        condensed: ['var(--font-ubuntu-condensed)', 'var(--font-ubuntu)', 'sans-serif'],
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
