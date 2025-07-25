/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MainBlue: "#827CBF",
        SecBlue: "#3E419E",
        MainWhite: "#E9F3F4",
        MainBlack: "#1D1E20",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        cairo: ["Cairo", "sans-serif"], 
      },
      screens: {
        "max-sm": { max: "639px" }, // أقل من 640px
        "max-md": { max: "767px" }, // أقل من 768px
        "max-lg": { max: "1023px" }, // أقل من 1024px
        "max-xl": { max: "1279px" }, // أقل من 1280px
        "max-2xl": { max: "1535px" }, // أقل من 1536px
        "max-960": { max: "899px" }, // أقل من 960px
        "max-800": { max: "799px" }, // اكبر من 800px
        "max-440": { max: "439px" }, // اكبر من 440px
        "min-sm": { min: "640px" }, // اكبر من 640px
        "min-md": { min: "768px" }, // اكبر من 768px
        "min-lg": { min: "1024px" }, // اكبر من 1024px
        "min-xl": { min: "1280px" }, // اكبر من 1280px
        "min-2xl": { min: "1536px" }, // اكبر من 1536px
        "min-800": { min: "800px" }, // اكبر من 800px
        "min-960": { min: "900px" }, // اكبر من 960px
        "min-1400": { min: "1400px" }, // اكبر من 1400px
      },
    },
  },
  plugins: [],
};
