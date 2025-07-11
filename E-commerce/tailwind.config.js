/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1CA7A7', // Teal Blue
        navy: '#22304A',    // Deep Navy
        accent: '#FFD166',  // Golden Yellow
        success: '#43B97F', // Emerald Green
        danger: '#FF6B6B',  // Coral Red
        bg: '#F6F8FA',      // Light Gray
        text: '#1A2236',    // Dark Navy
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.card-box': {
          '@apply rounded-2xl shadow-xl p-6 border border-primary bg-white': {},
        },
        '.gradient-header': {
          '@apply bg-gradient-to-r from-primary via-navy to-accent shadow-lg rounded-b-xl': {},
        },
        '.gradient-btn': {
          '@apply bg-accent text-navy px-6 py-2 rounded-lg font-bold shadow hover:bg-primary hover:text-white transition-all': {},
        },
        '.section-title': {
          '@apply text-2xl font-extrabold mb-4 text-navy drop-shadow': {},
        },
        '.section-box': {
          '@apply max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 border border-primary': {},
        },
        '.table-head': {
          '@apply border-b bg-gradient-to-r from-primary to-accent': {},
        },
        '.table-row': {
          '@apply border-b hover:bg-bg transition-colors': {},
        },
        '.badge-qty': {
          '@apply absolute -top-2 -right-2 bg-success text-white text-xs rounded-full px-2 py-0.5 border-2 border-white shadow-lg animate-bounce': {},
        },
      });
    },
  ],
}