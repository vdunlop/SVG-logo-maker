const Square = require("./square");

describe("Square", () => {
  it("should render a string for a red square", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="75" y="25" width="200" height="200" fill="red"/>'
    );
  });
  it("should render a string for the white logo in the square", () => {
    const shape = new Square();
    shape.setLogoText("VMD");
    shape.setLogoTextColor("white");
    expect(shape.renderLogo()).toEqual(
      '<text x="175" y="125" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="white">VMD</text>'
    );
  });
});
