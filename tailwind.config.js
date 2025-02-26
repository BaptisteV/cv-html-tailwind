// Start the Tailwind CLI build process
// Run the CLI tool to scan your template files for classes and build your CSS.
// npx @tailwindcss/cli -i ./input.css -o ./output.css --watch */

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
