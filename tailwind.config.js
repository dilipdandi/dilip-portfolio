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
      borderColor:"#F8BBD0",
      backgroundColor:"#242323",
      textColor:"#FFF5F5"
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

