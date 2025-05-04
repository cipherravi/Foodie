/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all your source files (JSX and TSX)
    // "./src/Components/**/*.{js,jsx,ts,tsx}", // Match all files in Components folder
    // "./src/pages/**/*.{js,jsx,ts,tsx}", // Match all files in pages folder
  ],
  theme: {
    extend: {
      colors: {
        menuShimmer: "#181A29",
      },
      fontFamily: {
        "gilroy-bold": [
          "Gilroy-bold",
          "Segoe UI",
          "Tahoma",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
        "gilroy-medium": [
          "Gilroy-medium",
          "Segoe UI",
          "Tahoma",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
        "gilroy-light": [
          "Gilroy-light",
          "Segoe UI",
          "Tahoma",
          "Geneva",
          "Verdana",
          "sans-serif",
        ],
        "proxima-nova": [
          "ProximaNova",
          "arial",
          "Helvetica Neue",
          "sans-serif",
        ],
        "proxima-nova-regular": [
          "ProximaNova-regular",
          "arial",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
