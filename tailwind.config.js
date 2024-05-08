/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 2.5s linear infinite", // 3s is the new duration
        "superslow-spin": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
