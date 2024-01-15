// Include packages:
// fs for write file.
const fs = require("fs");
const svgFileName = "./examples/logo.svg";

// Inquirer for user input.
const inquirer = require("inquirer");

// Shape files
const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");

// Strings used for creating the SVG file.
const newLineReturnStr = "/r/n/r/n";
const svgHeaderStr =
  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
const svgEndStr = "</svg>";
let svgString = "";

const OK = 0;
const ERR_STATUS = 1;
let responseStatus = OK;

// This set of functions processes the shape and writes it to the svg file
// Write the formatted input to the svg file.
function writeLogoFile(str) {
  fs.writeFile(svgFileName, str, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg.")
  );
}
// Process shapes
function processCircle(data) {
  console.log("in circle");
  const circle = new Circle();
  let renderStr = "";

  // Set up circle with input colors and text
  circle.setColor(data.shapeColor);
  circle.setLogoTextColor(data.textColor);
  circle.setLogoText(data.setLogoText);

  // render the strings to build the circle
  renderStr =
    `${svgHeaderStr}` + circle.render() + circle.renderLogo() + `${svgEndStr}`;
  console.log(renderStr);
  writeLogoFile(renderStr);
}
function processTriangle(data) {
  console.log("in triangle");
  const triangle = new Triangle();
  let renderStr = "";

  // Set up circle with input colors and text
  triangle.setColor(data.shapeColor);
  triangle.setLogoTextColor(data.textColor);
  triangle.setLogoText(data.setLogoText);

  // render the strings to build the circle
  renderStr =
    `${svgHeaderStr}` + triangle.render() + triangle.renderLogo() + `${svgEndStr}`;
  console.log(renderStr);
  writeLogoFile(renderStr);
}
function processSquare(data) {
  console.log("in square");
  const square = new Square();
  let renderStr = "";

  // Set up circle with input colors and text
  square.setColor(data.shapeColor);
  square.setLogoTextColor(data.textColor);
  square.setLogoText(data.setLogoText);

  // render the strings to build the circle
  renderStr =
    `${svgHeaderStr}` + circle.render() + square.renderLogo() + `${svgEndStr}`;
  console.log(renderStr);
  writeLogoFile(renderStr);
}

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
    console.log(responses);
    switch (responses.logoShape) {
      case "Circle":
        processCircle(responses);
        break;
      case "Triangle":
        processTriangle(responses);
        break;
      case "Square":
        processSquare(responses);
        break;
      default:
    }
  });
