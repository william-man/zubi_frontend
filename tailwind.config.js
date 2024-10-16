/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zubiLogo: "#FFD166",
        zubiGreen: "#629677",
        zubiDarkGreen: "#495D63",
        font: "#FFFFFF",
        buttonBg: "#FFFFFF",
        zubiText: "#1B2D2A",
        zubiHighlight: "#6F2DBD",
      },
    },
  },
  plugins: [],
};
