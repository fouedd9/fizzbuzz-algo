const fizzBuzz = require("./fizzbuzz");

const expected = [1, 2, "Fizz", 4, "Buzz"];

const result = fizzBuzz(5);

if (JSON.stringify(result) === JSON.stringify(expected)) {
  console.log("✅ Test passed");
} else {
  console.error("❌ Test failed");
  console.log("Expected:", expected);
  console.log("Received:", result);
}
