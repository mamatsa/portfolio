/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '95%': {
            width: '95%',
            borderColor: '#facc15',
          },
          '100%': {
            width: '100%',
            borderColor: 'transparent',
          },
        },
      },

      animation: {
        typing: 'typing 2.4s steps(24) forwards',
      },
    },
  },
  plugins: [],
};
