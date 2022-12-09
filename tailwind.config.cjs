/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(255, 225, 255, 255)',
          '0 45px 65px rgba(255, 225, 255, 255)'
        ]
      }
    },
  },
  plugins: [],
}
