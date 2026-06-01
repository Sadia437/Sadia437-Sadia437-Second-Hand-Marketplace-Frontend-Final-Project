/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'sans-serif'] },
      colors: {
        primary: '#4F46E5',
        secondary: '#F3F4F6',
        accent: '#10B981',
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4F46E5',
          secondary: '#F3F4F6',
          accent: '#10B981',
          neutral: '#111827',
          'base-100': '#ffffff',
          'base-200': '#F3F4F6',
          'base-300': '#E5E7EB',
        },
      },
    ],
  },
};
