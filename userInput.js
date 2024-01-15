// Include packages:
// Inquirer for user input.
// fs for write file.
const inquirer = require("inquirer");
const fs = require("fs");
const svgFileName = "./outputSVG/logo.svg";

// Strings used for creating the SVG file.
const newLineReturnStr = "/r/n/r/n";
const svgHeaderStr =
  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
const svgEndStr = "</svg>";
let svgString = "";

const OK = 0;
const ERR_STATUS = 1;
let responseStatus = OK;

// Questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to 3 digits for your logo text.",
      name: "logoText",
    },
    {
      type: "input",
      message:
        "Enter text color using a color keyword OR a '#'started hexadecimal number.",
      name: "textColor",
    },
    {
      type: "list",
      message: "Choose a shape.",
      name: "logoShape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      message:
        "Enter shape color using a color keyword OR a '#'started hexadecimal number.",
      name: "shapeColor",
    },
  ])
  .then((responses) => {
    // Format the logo
    console.log(responses);
    responseStatus = verifyResponses(responses);
    if (responseStatus === ERR_STATUS) {
      return;
    }
    formatLogo(responses);
    createLogoFile();
  });
/* .catch((err) => {
    console.error(err);
    console.log("Something went wrong.");
  });*/

module.exports = userInput;
