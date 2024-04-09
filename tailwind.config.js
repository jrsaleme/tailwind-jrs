/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "./**/*.html",
        
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bali': "url(../img/bali.jpg)",
        'chicago': "url(../img/chicago.jpg)",
        'europe': "url(../img/europe.jpg)",
        'iceland': "url(../img/iceland.jpg)",
        'LA': "url(../img/LA.jpg)",
        'miami': "url(../img/miami.jpg)",
        'new_york': "url(../img/new_york.jpg)",
        'norway': "url(../img/norway.jpg)",
        'sanFrancisco': "url(../img/sanFrancisco.jpg)",
        'sanFranciscoDesktop': "url(../img/sanFranciscoDesktop.jpg)",
        'seattle': "url(../img/seattle.jpg)",
        'switzerland': "url(../img/switzerland.jpg)",
        'sydney': "url(../img/sydney.jpg)",
        'yosemite': "url(../img/yosemite.jpg)",
      }, 
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0ea5e9',
      'secondary': '#4f46e5',
      'tertiary': '#61AEC9'
    }),
    textColor:{
      'primary': '#0ea5e9',
      'secondary': '#4f46e5',
      'tertiary': '#61AEC9'
    },
    fontFamily:{
      Monserrat:['Monserrat', 'san-serif']
    },
      
    },
  },
  variants: {
	//	width: ["responsive", "hover", "focus"], al tener la version 3 de tw, no hace falta esta linea
		extend: {
	 },
  plugins: [],
}
}
