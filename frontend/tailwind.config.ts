import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['Codec Warm Trial', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Nexa', 'Nunito', 'sans-serif'],
        body: ['Codec Warm Trial', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
