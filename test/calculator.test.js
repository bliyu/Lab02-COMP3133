const assert = require("assert");
const calc = require("../calculator");

describe("Calculator Test", () => {

  it("add(5,2) should PASS", () => {
    assert.strictEqual(calc.add(5, 2), 7);
  });

  it("add(5,2) should FAIL", () => {
    assert.notStrictEqual(calc.add(5, 2), 8);
  });

  it("sub(5,2) should PASS", () => {
    assert.strictEqual(calc.sub(5, 2), 3);
  });

  it("sub(5,2) should FAIL", () => {
    assert.notStrictEqual(calc.sub(5, 2), 5);
  });

  it("mul(5,2) should PASS", () => {
    assert.strictEqual(calc.mul(5, 2), 10);
  });

  it("mul(5,2) should FAIL", () => {
    assert.notStrictEqual(calc.mul(5, 2), 12);
  });

  it("div(10,2) should PASS", () => {
    assert.strictEqual(calc.div(10, 2), 5);
  });

  it("div(10,2) should FAIL", () => {
    assert.notStrictEqual(calc.div(10, 2), 2);
  });

});
