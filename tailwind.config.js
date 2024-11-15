// Start the Tailwind CLI build process
// Run the CLI tool to scan your template files for classes and build your CSS.
// npx tailwindcss -i input.css -o ./output.css --watch b*/

module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
  ]
}

