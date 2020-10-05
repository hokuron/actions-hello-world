const assert = require("assert");
const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
  context("value is divisible by 15", () => {
    it("returns FizzBuzz", () => {
      assert(fizzbuzz(30) === "FizzBuzz");
    });
  });
  context("value is divisible by 3", () => {
    it("returns Fizz", () => {
      assert(fizzbuzz(9) === "Fizz");
    });
  });
  context("value is divisible by 15", () => {
    it("returns Buzz", () => {
      assert(fizzbuzz(10) === "Buzz");
    });
  });
  context("value is not divisible by 3 or 5", () => {
    it("returns the value", () => {
      assert(fizzbuzz(7) === "7");
    });
  });
});
