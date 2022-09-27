/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "375px", "max": "600px" },
    },
    colors: {
      // ## Colors

      "Very-Dark-Grayish-Blue": "hsl(217, 19%, 35%)",
      "Desaturated-Dark-Blue": "hsl(214, 17%, 51%)",
      "Grayish-Blue": "hsl(212, 23%, 69%)",
      "Light-Grayish-Blue": "hsl(210, 46%, 95%)",
    },
    fontSize: {
      "ms": "13px",
    },
    fontFamily: {
      "Manrope": ["Manrope", "sans-serif"]
    },
    fontWeight: {
      "ms": 500,
      "lg": 700,
    },
    extend: {},
  },
  plugins: [],
}
