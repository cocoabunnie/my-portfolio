/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      pink: '#E37777',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
    },
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        slideInFromLeftFast: 'slideInFromLeft 1.5s ease-out',
        slideInFromLeftMedium: 'slideInFromLeft 1.7s ease-out',
        slideInFromLeftSlow: 'slideInFromLeft 1.9s ease-out',
        slideInFromRight: 'slideInFromRight 1s ease-out',
      },
    },
  },
  plugins: [],
}
