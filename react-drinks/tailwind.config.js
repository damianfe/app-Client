/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
     
      customRed: '#b6151080',
      customWhite: '#ffffff',
      customOrange: '#F36541'
    },
  },
};
export const plugins = [function ({ addUtilities }) {
  addUtilities({
    '.text-shadow-black': {
      textShadow: '2px 2px 4px black',
    },
  });
},
];
