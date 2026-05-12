/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verd: {
          fosc: '#27500A',
          mig: '#639922',
          clar: '#97C459',
          pale: '#EAF3DE',
        },
        crema: '#F5F0E8',
        terra: '#D3C9B8',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
