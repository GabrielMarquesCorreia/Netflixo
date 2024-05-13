/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    sm: "390px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
}