/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: '#4ade80', // Emerald-400
          foreground: '#064e3b',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Cyan-500
          foreground: '#083344',
        },
        terminal: {
          black: '#09090b',
          dark: '#18181b',
          muted: '#27272a',
          accent: '#4ade80',
          info: '#06b6d4',
          warn: '#fbbf24',
        }
      },
      keyframes: {
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'terminal-blink': 'terminal-blink 1s step-end infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}