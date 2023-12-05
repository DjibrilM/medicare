/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary color (blue)
        'primary-50': '#eef2ff',
        'primary-100': '#dbeafe',
        'primary-200': '#c7d2fe',
        'primary-300': '#a5b4fc',
        'primary-400': '#818cf8',
        'primary-500': '#6366f1',
        'primary-600': '#4f46e5',
        'primary-700': '#4338ca',
        'primary-800': '#3730a3',

        //text colors
        'text-500': '#64748b',
        'text-600': '#475569',
        'text-700': '#334155',
        'text-800': '#1e293b',
        'text-900': '#0f172a',
      }
    },
  },
  plugins: [],
}