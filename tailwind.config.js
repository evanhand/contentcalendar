/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'wave-slow': 'wave 20s linear infinite',
        'wave-medium': 'wave 15s linear infinite',
        'wave-fast': 'wave 10s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
};