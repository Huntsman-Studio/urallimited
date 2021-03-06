module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'agriexportbg': 'url("assets/img/AgriexportImage.webp")',
        'gbtransbg': 'url("assets/img/GBTransmissionsImage.webp")',
        'laleonessabg': 'url("assets/img/LaLeonessaImage.webp")',
        'omnigearbg': 'url("assets/img/OmniGearImage.webp")',
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
