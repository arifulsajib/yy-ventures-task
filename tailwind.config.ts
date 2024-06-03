import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        "light-color": "var(--light-color)",
        "cream-color": "var(--cream-color)",
        "deepblue-color": "var(--deepblue-color)",
        "maroon-color": "var(--maroon-color)",
        "lightgreen-color": "var(--lightgreen-color)",
        "lightgrey-color": "var(--lightgrey-color)"
      }
    }
  },
  plugins: []
};
export default config;
