const userInput = require("./lib/userInput");

userInput.run();

// Write the formatted input to the readme file.
fs.writeFile(svgFileName, svgText, (err) =>
  err ? console.log(err) : console.log("SVG File Created.")
);
