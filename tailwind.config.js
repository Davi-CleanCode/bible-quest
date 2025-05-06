/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F3EFFF',
          100: '#E8E0FF',
          200: '#D0C1FF',
          300: '#B9A2FF',
          400: '#A183FF',
          500: '#8A64FF', // Primary purple
          600: '#7046FF',
          700: '#5728FF',
          800: '#3D0AFF',
          900: '#2400EB',
        },
        secondary: {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE299',
          300: '#FFD466',
          400: '#FFC533',
          500: '#FFB700', // Gold
          600: '#E6A500',
          700: '#CC9200',
          800: '#B38000',
          900: '#996D00',
        },
        accent: {
          50: '#E6FFF9',
          100: '#CCFFF4',
          200: '#99FFE8',
          300: '#66FFDD',
          400: '#33FFD1',
          500: '#00FFC6', // Cyan
          600: '#00E6B2',
          700: '#00CC9E',
          800: '#00B38A',
          900: '#009976',
        },
        success: {
          500: '#34D399', // Emerald
        },
        warning: {
          500: '#FBBF24', // Amber
        },
        error: {
          500: '#F87171', // Red
        },
        neutral: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        }
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'body': ['Nunito', 'sans-serif']
      },
      backgroundImage: {
        'pixel-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIklEQVQYV2NkYGD4z4AHMP7//x+/gmPHjv1nxGcJSA0jNgUAz5cJ7bqtzj0AAAAASUVORK5CYII=')",
        'hero-pattern': "url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1600')"
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};