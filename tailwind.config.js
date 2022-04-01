module.exports = {
  content: [
    './component-library/components/**/*.html',
    './content/**/*.md',
    './layouts/**/*.html'
  ],  
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
