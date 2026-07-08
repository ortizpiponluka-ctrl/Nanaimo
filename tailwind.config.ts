import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        paper: "#EEF3FF",
        bone: "#FCF7EF",
        lava: "#FF5A5F",
        mint: "#2DE2A6",
        cyan: "#2563EB",
        violet: "#8B5CF6"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(37, 99, 235, 0.26)",
        mint: "0 0 60px rgba(45, 226, 166, 0.22)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(16,24,40,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,24,40,.08) 1px, transparent 1px)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" }
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        scan: "scan 3.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
