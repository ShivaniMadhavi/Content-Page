// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }


// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      '2xl': ['20px', {
        // lineHeight: '24px',
      }],
    },
    backgroundImage: theme => ({
      'nav-bar': "url('/src/Assets/Slices/nav_bar.png')",
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}