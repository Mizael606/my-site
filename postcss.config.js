module.exports = {
  plugins: {
    tailwindcss: {
      theme: {
        fontFamily: {
          body: ['CircularStd', 'sans-serif'],
        }
      }
    },
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './components/**/*.[js,jsx]',
              './pages/**/*.[js,jsx]'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        }
      : {})
  }
};