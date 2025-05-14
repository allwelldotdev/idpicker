/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946', // Turkish red
          light: '#FF4D58',
          dark: '#CC3340',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#FF8C42', // Warm orange
          foreground: '#FFFFFF',
        },
        background: '#FEF9F8', // Very light pink
        muted: '#F5E6E8',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#2D3047'
        },
        border: '#FFE5E5',
        text: {
          primary: '#2D3047',    // Dark blue-gray
          secondary: '#4A4E69',  // Medium blue-gray
          muted: '#9A8C98',     // Muted purple-gray
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-fade': 'grid-fade 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'line-glow': 'line-glow 3s ease-in-out infinite alternate', // Added new animation
        'gradient': 'gradient 8s linear infinite',
        'spin-slow-reverse': 'spin 25s linear reverse infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'grid-fade': {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 0.3 },
          '100%': { opacity: 0.6 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(124, 58, 237, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.6)' },
        },
        'line-glow': {
          '0%': { filter: 'drop-shadow(0 0 1px rgba(255, 255, 255, 0.1))' },
          '100%': { filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
