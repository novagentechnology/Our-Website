/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agency: {
          blue: '#0865F5',
          blueHover: '#0052D6',
          dark: '#171B26',
          gray: '#777B86',
          white: '#FFFFFF',
          softBg: '#F3F6FD',
          border: '#EBEEF4',
        },
        brand: {
          navy: {
            DEFAULT: '#171B26',
            dark: '#090F1E',
            surface: '#111827',
            card: '#161F37',
            border: '#EBEEF4',
          },
          light: '#FFFFFF',
          accent: {
            primary: '#0865F5',
            primaryHover: '#0052D6',
            secondary: '#22D3EE',
            secondaryHover: '#06B6D4'
          },
          body: '#777B86',
          bodyLight: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'service-card': '0 8px 30px rgba(20, 35, 65, 0.055)',
        'service-card-hover': '0 14px 35px rgba(20, 35, 65, 0.09)',
        'subtle': '0 4px 20px -2px rgba(11, 16, 32, 0.05)',
        'card': '0 10px 30px -5px rgba(11, 16, 32, 0.08)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'btn': '3px',
      }
    },
  },
  plugins: [],
}
