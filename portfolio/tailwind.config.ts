import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rationale: ["var(--font-rationale)", "sans serif"],
      },

      colors: {
        DarkCyan: "#008B8B",
        githubColor: "#01040a",
      },

      spacing: {
        "24px": "24px",
        "80px": "80px",
        "224px": "224px",
        "352px": "352px",
        "660px": "660px",
        "760px": "760px",
        "768px": "768px",
        "1232px": "1232px",
      }
    },
  },
  plugins: [],
} satisfies Config;
