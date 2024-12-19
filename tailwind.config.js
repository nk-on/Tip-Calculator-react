export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        custom: 'min(90%, 920px)',
      }
    },
  },
  plugins: [],
}