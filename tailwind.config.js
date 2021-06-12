module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0D0D2B',
          icon: '#3671E9',
          button: '#3671E9',
          white10: '#FFFFFF1A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
