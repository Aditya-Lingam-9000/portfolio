/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0f172a',
        primary: '#22c55e',
        secondary: '#38bdf8',
        'text-main': '#e5e7eb',
        'text-muted': '#9ca3af',
        error: '#f97316',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        gradientXY: {
          '0%, 100%': {
            backgroundSize: '400% 400%',
            backgroundPosition: 'left center'
          },
          '50%': {
            backgroundSize: '400% 400%',
            backgroundPosition: 'right center'
          }
        },
      },
    },
  },
  plugins: [
    require('lightswind/plugin'),],
};
