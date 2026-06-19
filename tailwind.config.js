/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF9F6',
        warmOffWhite: '#F4F3EE',
        chocolate: '#7C2D12',
        coffee: '#2B1B17',
        blueGrey: '#94A3B8',
        charcoal: '#0F172A',
        pureWhite: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        bengali: ['Hind Siliguri', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
