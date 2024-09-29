// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', 
    ],
    theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Replaces the default sans-serif font with Poppins
      },
      backgroundImage: {
        'custom-image': "url('src/assets/background.jpg')", // Replace with your image path
      },
    },
  },
  plugins: [],
  }
  