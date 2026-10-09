/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B1020',
            dark: '#070A14',
            surface: '#111827',
            card: '#161F37',
            border: '#1F293D',
          },
          light: '#F8FAFC',
          accent: {
            primary: '#6366F1',     // Indigo
            primaryHover: '#4F46E5',
            secondary: '#22D3EE',   // Cyan
            secondaryHover: '#06B6D4'
          },
          body: '#475569',
          bodyLight: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(11, 16, 32, 0.05)',
        'card': '0 10px 30px -5px rgba(11, 16, 32, 0.08)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        'glow-primary': '0 0 25px -5px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
