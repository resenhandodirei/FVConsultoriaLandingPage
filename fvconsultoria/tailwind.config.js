/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx, jpg, jpeg, png}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#10B981',
          orange: '#F97316',
        },
        // Cinzas automotivos
        carbon: {
          900: '#050505',
          800: '#0f0f0f',
          700: '#1a1a1a',
        }
      },
      boxShadow: {
        // Sombra que parece neon de carro
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.2)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.2)',
      }
    },
  },
  plugins: [],
}