module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      wyrk: {
        200: '#68819a',
        400: '#2d4359',
        500: '#283b4f',
        600: '#1f3246',
        800: '#142435'
      },
      'white': '#ffffff'
    },
    fontFamily: {
      'sans': 'Inter'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
