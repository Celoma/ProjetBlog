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
        "custom-purple": "#231123",
        "custom-orange": "#FFC482",
        "custom-brown": "#A15E49"
      },
      height: {
        "footer": "435px",
        "15": "60px",
        "90": "350px",
      }
    },
  },
  plugins: [],
};
export default config;
