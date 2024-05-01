/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        header_font:["Playfair Display" ],
        main_font:["Montserrat"]
    }
    },
  },
  plugins: [],
}

