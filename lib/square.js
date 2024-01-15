const Shapes = require("./shapes.js");

class Square extends Shapes {
  constructor(height, width, color, logo, logoTextColor) {
    super(height, width, color, logo, logoTextColor);
  }
  render() {
    return `<rect x="75" y="25" width="200" height="200" fill="${this.color}"/>`;
  }
  renderLogo() {
    return `<text x="175" y="125" font-size="60" dominant-baseline="middle" text-anchor="middle" fill=\"${this.logoTextColor}\">${this.logo}</text>`;
  }
}

module.exports = Square;
