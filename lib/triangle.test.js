const Triangle = require("./triangle");

describe("Triangle", () => {
  it("should render a string for a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
    );
  });

  it("should render a string for the logo in the triangle", () => {
    const shape = new Triangle();
    shape.setLogoText("VMD");
    expect(shape.renderLogo()).toEqual(
      '<text x="150" y="150" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="white">VMD</text>'
    );
  });
});
