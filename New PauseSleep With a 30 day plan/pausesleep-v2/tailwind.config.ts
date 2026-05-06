import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        sage: {
          DEFAULT: "#3D6B61",
          light: "#4A7C6F",
          dark: "#2D5248",
        },
        cream: "#FAF9F7",
        "warm-grey": "#F5F0EC",
        "warm-rose": "#E8D5CB",
        "near-black": "#1A1A2E",
      },
    },
  },
  plugins: [],
}

export default config
