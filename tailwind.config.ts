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
      },
      animation: {
        'bottom-to-up': 'bottom-to-up 4s ease-in-out infinite', // Adjust duration to 4s or more for a smoother effect
      },
      keyframes: {
        'bottom-to-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '30%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [ daisyui],
  daisyui: {
    themes: ["black"],
  },
} satisfies Config;
