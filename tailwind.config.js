module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'agriexportbg': 'url("assets/img/AgriExportImage.jpg)"',
        'gbtransbg': 'url("assets/img/AgriExportImage.jpg)"',
        'laleonessabg': 'url("assets/img/AgriExportImage.jpg)"',
        'omnigearbg': 'url("assets/img/AgriExportImage.jpg)"',
        'huntsmanbg': 'url("assets/img/HunstmanStudioImage.webp")'
      },
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
