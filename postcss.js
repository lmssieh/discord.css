// dependencies
const fs = require("fs")
const postcss = require("postcss")
const atImport = require("postcss-import")

// css to be processed
const css = fs.readFileSync("./src/styles.css", "utf8")

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is needed here
    from: "./src/styles.css"
  })
  .then((result) => {
    const output = result.css
    fs.writeFileSync("./dist/styles.css", output)
    console.log(output)
  })
