import type { Config } from "tailwindcss";
import daisyui from "daisyui"
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#F15C2E"
      },
      fontFamily: {
        poppinsRegular: ["var(--font-poppins-sans)", "cursive"],
      }
    },
  },
  plugins: [ daisyui],
  daisyui: {
    themes: ["black"],
  },
} satisfies Config;
