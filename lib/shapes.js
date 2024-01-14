class Shapes {
  constructor(height, width, color, logo, logoTextColor) {
    this.height = height;
    this.width = width;
    this.color = color;
    this.logo = logo;
    this.logoTextColor = logoTextColor;
  }

  // This method is like a place holder for each child (shape) to have its own render class because
  // each shape will be rendered/drawn differently.
  render() {
    throw new Error("Child class must implement its own render() method.");
  }
  renderLogo() {
    throw new Error("Child class must implement its own renderLogo() method.");
  }
  setColor(color) {
    this.color = color;
  }
  setLogoText(logo) {
    this.logo = logo;
  }
  setLogoTextColor(logoTextColor) {
    this.logoTextColor = logoTextColor;
  }
}

module.exports = Shapes;
