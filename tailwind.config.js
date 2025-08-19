module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                'custom-nav': '#E7EFC7',
                'custom-bgm': '#AEC8A4',
                'custom-parein': '#C0C9EE',
            },
            fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
            
    },
  },
  plugins: [],
}
