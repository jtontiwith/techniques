module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'primary-input': '#F5F8FF',
      'primary-button': '#f0c332',
      'home-blue': '#fafbff',
      'badge-blue': '#F8F8F8',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
