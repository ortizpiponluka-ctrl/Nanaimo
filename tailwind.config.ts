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
        ink: "#0B0D12",
        paper: "#F7F1E8",
        bone: "#FFF8ED",
        lava: "#FF4D2E",
        mint: "#A7F35A",
        cyan: "#47D7FF",
        violet: "#7C5CFF"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 70px rgba(255, 77, 46, 0.28)",
        mint: "0 0 60px rgba(167, 243, 90, 0.24)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)"
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
