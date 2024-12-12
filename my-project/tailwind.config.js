/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a0202",
        new: "#DCDCDC",
        light: "#ebebeb",
    },
  },
  fontFamily : {
    primary : "Poppins, sans-serif",
  },
  screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
},
  plugins: [],
};