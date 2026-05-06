/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',    // Deep Midnight
          light: '#f8fafc',   // Soft White
          accent: '#06b6d4',  // Electric Cyan (replaces the old blue)
          success: '#10b981', // Emerald (replaces the old green)[cite: 1, 5]
        }
      }
    },
  },
  plugins: [],
}