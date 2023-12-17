function add(a, b) {
    return a + b;
  }

// const { add } = require("./testing");

describe("add", () => {
    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(3, 4)).toBe(7);
        expect(add(5, 6)).toBe(11);
    });

    it("should return NaN for invalid inputs", () => {
        expect(add("a", "b")).toBeNaN();
        expect(add(1, "b")).toBeNaN();
        expect(add("a", 2)).toBeNaN();
    });

    it("should add floating point numbers", () => {
        expect(add(1.5, 2.5)).toBe(4);
        expect(add(3.5, 4.5)).toBe(8);
        expect(add(5.5, 6.5)).toBe(12);
    });

    it("should add negative numbers", () => {
        expect(add(-1, -2)).toBe(-3);
        expect(add(-3, -4)).toBe(-7);
        expect(add(-5, -6)).toBe(-11);
    });

    it("should add zero", () => {
        expect(add(0, 0)).toBe(0);
        expect(add(0, 1)).toBe(1);
        expect(add(1, 0)).toBe(1);
    });
});
