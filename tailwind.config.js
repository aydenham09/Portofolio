/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        paper: '#FFFFFF',
        ink: '#111111',
        wiyata: '#D9480F',
        amber: '#D9480F',
        surface: '#FFFFFF',
        line: 'rgba(17, 17, 17, 0.18)',
        background: '#FFFFFF',
        border: 'rgba(17, 17, 17, 0.18)',
        accent: '#D9480F',
      }
    },
  },
  plugins: [],
}
