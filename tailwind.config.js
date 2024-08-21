/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/web/**/*.html.erb',
    './app/views/admin/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/assets/stylesheets/web/**/*.css',
    './app/assets/stylesheets/admin/**/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

