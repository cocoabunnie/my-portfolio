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
        jiggle: {
          '0%': { transform: 'translateX(-3px)' },
          '50%': { transform: 'translateX(3px)' },
          '100%': { transform: 'translateX(-3px)' },
        },
        wiggle: {
          '0%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(-10deg)' },
        },
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
        jiggle: 'jiggle 0.5s ease-in-out 5s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        mobileMenuSlide: 'slideInFromLeft 0.3s ease-out',
        slideInFromLeftFast: 'slideInFromLeft 1.5s ease-out',
        slideInFromLeftMedium: 'slideInFromLeft 1.7s ease-out',
        slideInFromLeftSlow: 'slideInFromLeft 1.9s ease-out',
        slideInFromRight: 'slideInFromRight 1s ease-out',
      },
    },
  },
  plugins: [],
}
