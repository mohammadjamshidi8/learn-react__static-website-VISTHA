/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins'],
      },
      colors : {
        primary: '#003379',
        sabz : '#44BF8D',
        sabzTire : '#3d8769'
      }
    },
  },
  plugins: [],
}

