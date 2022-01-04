module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'full': '1440px',
        'f-content': '1301px',
        'mf': "900px"
      },
    },
  },
  plugins: [],
}