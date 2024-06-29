/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "post-gray": "#888",
      },
      backgroundColor: {
        "hover-bg-color": "rgba(50, 50, 50, 0.7)",
      },
    },
  },
  plugins: [],
};
