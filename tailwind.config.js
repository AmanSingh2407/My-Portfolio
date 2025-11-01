import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        accent: {
          DEFAULT: '#06b6d4',
          dark: '#0e7490'
        }
      },
      boxShadow: {
        glow: '0 0 25px rgba(6, 182, 212, 0.35)'
      }
    }
  },
  plugins: []
}
