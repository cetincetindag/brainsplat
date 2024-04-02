/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        'bunker': {
          '50': '#f4f1ff',
          '100': '#ece5ff',
          '200': '#d9cfff',
          '300': '#c0a9ff',
          '400': '#a178ff',
          '500': '#8741ff',
          '600': '#7b1bff',
          '700': '#6707eb',
          '800': '#5b07d0',
          '900': '#4c08aa',
          '950': '#2e0174',
        },
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/background.png')",
        'logo': "url('/src/assets/images/logo.png')",
      },

    },
  },
  plugins: [],
}

