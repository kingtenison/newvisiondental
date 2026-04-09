/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5C0F22',
        secondary: '#C5A059',
        'secondary-dark': '#A68A46',
        'soft-white': '#F9F9F9',
        'pure-white': '#FFFFFF',
        charcoal: '#2D2D2D',
      },
      backgroundColor: {
        'soft-white': '#F9F9F9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
