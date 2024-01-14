const Shapes = require("./shapes.js");

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}"/>`;
  }
  renderLogo() {
    return `<text x="150" y="100" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="white">${this.logo}</text>`;
  }
}

module.exports = Circle;
