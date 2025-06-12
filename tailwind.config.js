/**  @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121212', // Changed from #050505 to a slightly lighter shade
          dark: '#0a0a0a',    // Changed from #000000 to dark gray
          light: '#1e1e1e',   // Changed from #121212 to a lighter gray
        },
        secondary: {
          DEFAULT: '#22c55e', // Green
          dark: '#16a34a',
          light: '#4ade80',
          blue: '#3b82f6',
          darkBlue: '#1e40af',
        },
        gradient: {
          start: '#3b82f6', // Blue
          mid: '#0ea5e9', // Light Blue
          end: '#22c55e', // Green
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        heading: ['"Raleway"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
  