/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,tsx,jsx}',
    './src/**/*.{html,js,tsx,jsx}',
    './components/**/*.{html,js,tsx,jsx}',
  ],
  theme: {
    extend: {
      animation: [
        'slide-in-left'
      ]
    },
  },
  plugins: [],
}
