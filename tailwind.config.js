module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        "primary" : "#e6ebf0",
        "grey1": "#b0b0b0",
        "grey2": "#b9b9b9"
      })
    },
  },
  plugins: [],
};
