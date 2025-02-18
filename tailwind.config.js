// Start the Tailwind CLI build process
// Run the CLI tool to scan your template files for classes and build your CSS.
// npx tailwindcss -i input.css -o ./output.css --watch b*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
