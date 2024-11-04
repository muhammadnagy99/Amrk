import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        PrimBtn: "#b0438a",
        SecBtn: "#23314c",
        FooterBg: "#23314c",
        primText: "#23314c",
        SecTextV1: "#fefbd9",
        SecTextV2: "#fff",
        InputColor: "#fbfbfb"
      },
    },
  },
  plugins: [],
};
export default config;
