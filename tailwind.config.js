/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Cantarell', 'sans-serif']
      },
      borderRadius: {
        left: "8px 0 0 8px",
        right: "0 8px 8px 0",
        bottom: "8px 8px 0 0",
        top: "0 0 8px 8px",
      },
      colors: {
        "forest-50": "#cad3db",
        "forest-100": "#b6c7d6",
        "forest-200": "#96bad9",
        "forest-300": "#6585a1",
        "forest-400": "#547da1",
        "forest-500": "#335a7d",
        "forest-600": "#1c3e5c",
        "forest-700": "#103454",
        "forest-800": "#061e33",
        "forest-900": "#020e1a",
        "forest-950": "#000817",
      },
      backgroundImage: {
        'unimar': "url('/src/assets/unimar-bg.webp')"
      }
    },
    animation: {
      goDown: "goDown 2s ease-in-out infinite",
      modalDown: "modalDown .5s ease-in-out"
    },
    keyframes: {
      goDown: {
        "0%": { transform: "translateY(0)" },
        "25%": { transform: "translateY(-12px)" },
        "50%": { transform: "translateY(4px)" },
        "75%": { transform: "translateY(-12px)" },
        "100%": { transform: "translateY(0)" },
      },
      modalDown: {
        "0%": { transform: "translateY(-12px)" },
        "100%": { transform: "translateY(0)" },
      }
    },
  },
  plugins: [],
}