/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'rgb(255, 255, 255)',
        'primaryBacground': 'rgb(229, 246, 246)',
        'blue': 'rgb(40, 70, 219)',
        'lightBlue': 'rgb(224, 255, 255)',
        'deepBlue': 'rgb(16, 16, 144)',
        'chestnut': 'rgb(205, 92, 92)',
        'lavender': 'rgb(255, 240, 245)',
        'primaryLight': 'rgb(240, 255, 255)',
        'secondaryLight': 'rgb(255, 243, 247)',
        'lightDark': 'rgb(232, 240, 254)',
      },
      fontFamily: {
        sans: ['Comic Sans MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

