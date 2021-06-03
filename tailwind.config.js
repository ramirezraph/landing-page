module.exports = {
   purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
   darkMode: false, // or 'media' or 'class'
   theme: {
      backgroundColor: (theme) => ({
         ...theme('colors'),
         primary: '#0385D1',
         secondary: '#56B4D2',
      }),
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
