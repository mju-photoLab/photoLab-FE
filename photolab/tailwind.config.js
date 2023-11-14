/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'realWH':'#FFFFFF',
      'muteBg': '#F9FAFB',
      'mainBlack':'#2A2A2A',
      'toneDownTxt':'#424242',
      'grey':'#848484',
      'stone':'#825B3D'
    },
    borderWidth: {
      default: '0px',
      '0.5': '0.5px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
    },
    extend: {},
  },
  plugins: [],
}

