/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d7e0eb',
          400: '#3d5a80',
          500: '#2a4365',
          600: '#1e3a5f',
          700: '#152b48',
          900: '#0d1b2e',
        },
        sky: {
          50: '#f0f7fb',
          100: '#dcedf5',
          300: '#a7cfe3',
          400: '#6ba3c5',
          500: '#4c8bb0',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf6ef',
          200: '#f4ede1',
        },
        sage: {
          100: '#e4efe3',
          300: '#b7d5b4',
          400: '#8fb996',
          500: '#6a9d72',
        },
        lavender: {
          100: '#ece6f2',
          300: '#c9b8da',
          400: '#b8a9c9',
          500: '#9c85b3',
        },
        clay: {
          400: '#c98a6b',
          500: '#b8734f',
        },
      },
      fontFamily: {
        display: ['"Lora"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(30, 58, 95, 0.15)',
        card: '0 4px 20px -4px rgba(30, 58, 95, 0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
