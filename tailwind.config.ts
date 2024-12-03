import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F15C2E", // Define your custom primary color
      },
      fontFamily: {
        poppinsRegular: ["Poppins", "sans-serif"], // Make sure the Poppins font is imported and used properly
      },
      animation: {
        "bottom-to-up": "bottom-to-up 4s ease-in-out infinite", 
        "scaleColorChange": "scaleColorChange 4s infinite",
      },
      keyframes: {
        "bottom-to-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "30%": { transform: "translateY(0)", opacity: "1" },
          "70%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        scaleColorChange: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.1)",
          },
          "66%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["black"], 
  },
} satisfies Config;
