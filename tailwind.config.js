/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        zoomOut: 'zoomOut 0.8s ease-out forwards',
      },
     },
    
    colors: {
      // baseColor:"#3e3e3e",
      // activeColor:"#ff6250",
      // highlightBg:"#090b23",
      // actionColor: "#fff",
      borderColor:"#FFB703",
      backgroundColor:"#8ECAE6",
      textColor:"#2F2F2F",
      primaryColor: "#FFB703",
      secondaryColor: "#8ECAE6"
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

