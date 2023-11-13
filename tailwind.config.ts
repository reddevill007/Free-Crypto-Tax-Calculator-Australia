import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0052FE",
        yellow: "#FFB800",
        "text-muted": "#F2F2F2",
        "gary-1": "#0F1629",
        textarea: "#EFF2F5",
      },
    },
  },
  plugins: [],
};
export default config;
