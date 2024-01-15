const Circle = require("./circle");

describe("Circle", () => {
  it("should render a string for a green circle", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="90" fill="green"/>'
    );
  });

  it("should render a string for the white logo in the circle", () => {
    const shape = new Circle();
    shape.setLogoText("VMD");
    shape.setLogoTextColor("white");
    expect(shape.renderLogo()).toEqual(
      '<text x="150" y="100" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="white">VMD</text>'
    );
  });
});
