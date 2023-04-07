/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#667085',
        buttonColor: '#16B1B5',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

