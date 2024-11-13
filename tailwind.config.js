/** @type {import('tailwindcss').Config} */
// Start the Tailwind CLI build process
// Run the CLI tool to scan your template files for classes and build your CSS.
// npx tailwindcss -i style.css -o ./public/output.css --watch b*/

module.exports = {
  content: ["./public/index.html", "./public/print.css", "./public/print.js", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

