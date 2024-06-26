/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'radio-canada-big': ['"Radio Canada Big"']
    }
  },
  variants: {
    extend: {
      placeholderColor: ['active', 'focus'],
    },
  },
  darkMode: 'selector',
  plugins: [],
}