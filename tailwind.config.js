/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: "#fff",
      body: "#f0f0f0",
      black: {
        20: "#00000033",
        40: "#00000066",
        60: "#00000099",
        80: "#000000cc",
        100: "#000000",
      },
      blue: {
        "primary": "#3b82f6",
        "light": "#93c5fd",
        "dark": "#1d4ed8"
      },
      green: {
        "primary": "#22c55e",
        "light": "#86efac",
        "dark": "#15803d"
      },
      red: {
        "primary": "#dc2626",
        "light": "#f87171",
        "dark": "#991b1b"
      },
    },
    fontSize: {
      base: "1.4rem",
      "ph": "3.6rem",
      "sh": "2.2rem",
      "th": "2rem",
      "qh": "1.6rem",
    },
    fontFamily: {
      'sans': 'DM sans, sans-serif'
    },
    extend: {

    },
  },
  plugins: [],
}
