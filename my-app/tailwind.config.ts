import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Standard import

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marrsgreen: "#006d5b",
        carrigreen: "#00a878",
      },
      // --font-roboto: var(--font-roboto); 
  
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        space: ["var(--font-space)"],
        lora:["var(--font-lora)"],
        mont:["var(--font-mont)"],
        roboto:["var(--font-roboto)"]
      },
    },
  },
  plugins: [
    // Cleaner plugin syntax
    plugin(function({ addVariant }) {
      addVariant('default', '.default &');
      addVariant('light', '.light &');
    }),
  ],
};

export default config;