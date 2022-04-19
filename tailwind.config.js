module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        "primary": "#e6ebf0"
      })
    },
  },
  plugins: [],
};
