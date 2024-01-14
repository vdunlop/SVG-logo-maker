const Shapes = require("./shapes.js");

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
  }
  renderLogo() {
    return `<text x="150" y="150" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="white">${this.logo}</text>`;
  }
}

module.exports = Triangle;
