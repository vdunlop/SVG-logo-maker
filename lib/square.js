const Shapes = require("./shapes.js");

class Square extends Shapes {
  render() {
    return `<rect x="75" y="25" width="200" height="200" fill="${this.color}"/>`;
  }
  renderLogo() {
    return `<text x="175" y="125" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="white">${this.logo}</text>`;
  }
}

module.exports = Square;
