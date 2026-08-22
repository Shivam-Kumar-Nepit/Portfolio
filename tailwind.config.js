/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0E14',      // page background — near-black navy, not pure black
        surface: '#131722',   // panel / card background
        surface2: '#1A2030',  // slightly raised surface (hover, tab bar)
        border: '#232A3B',    // hairline borders
        ink: '#E7EAF0',       // primary text
        muted: '#8B93A7',     // secondary / muted text
        signal: '#2DD4BF',    // accent — "live" teal, the real-time signal color
        link: '#60A5FA',      // secondary accent — links, secondary CTAs
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(45, 212, 191, 0.55)' },
          '70%': { boxShadow: '0 0 0 8px rgba(45, 212, 191, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(45, 212, 191, 0)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        pulseDot: 'pulseDot 2s infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
