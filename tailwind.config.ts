import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [
    nextui({
      // see app/global.css
      themes: {
        light: {
          colors: {
            background: "#e5e7eb",
            foreground: "#030712",
          },
        },
        dark: {
          colors: {
            background: "#141218",
            foreground: "#fbf8ff",
          },
        },
      },
    }),
  ],
};
export default config;
