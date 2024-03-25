import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        gray: "#CCCCCC"
      },
      colors: {
        "custom-purple": "#231123"
      },
      height: {
        "footer": "435px",
        "15": "60px",
      }
    },
  },
  plugins: [],
};
export default config;
