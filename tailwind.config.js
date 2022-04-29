/* eslint-disable global-require */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": "Montserrat, sans-serif"
      },
      fontSize: {
        "3xl": [
          "30px",
          {
            "fontWeight": "bold"
          }
        ]
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
}

