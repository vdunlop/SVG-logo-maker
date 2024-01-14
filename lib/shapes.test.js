const Shapes = require("./shapes");

describe("Shapes", () => {
  it("should throw an error if render() is called", () => {
    const shape = new Shapes();
    const err = new Error(
      "Child class must implement its own render() method."
    );
    expect(shape.render).toThrow(err);
  });

  it("should throw an error if renderText() is called", () => {
    const shape = new Shapes();
    const err = new Error(
      "Child class must implement its own renderLogo() method."
    );
    expect(shape.renderLogo).toThrow(err);
  });

  it("should change the shape color", () => {
    const shape = new Shapes();
    const color = "light-blue";
    shape.setColor(color);
    expect(shape.color).toEqual(color);
  });

  it("should change the text color", () => {
    const shape = new Shapes();
    const textColor = "light-green";
    shape.setLogoTextColor(textColor);
    expect(shape.logoTextColor).toEqual(textColor);
  });
  it("should change the text", () => {
    const shape = new Shapes();
    const word = "ABC";
    shape.setLogoText(word);
    expect(shape.logo).toEqual(word);
  });
});
