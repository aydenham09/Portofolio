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
        paper: '#FAF8F3',
        ink: '#17263B',
        wiyata: '#274B9F',
        amber: '#E9A13B',
        surface: '#FFFFFF',
        line: 'rgba(23, 38, 59, 0.14)',
        background: '#FAF8F3',
        border: 'rgba(23, 38, 59, 0.14)',
        accent: '#274B9F',
      }
    },
  },
  plugins: [],
}
