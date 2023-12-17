// write simple function adding up two numbers
function add(a, b) {
  return a + b;
}

// test the function with different inputs
console.log(add(1, 2)); // 3
console.log(add(3, 4)); // 7
console.log(add(5, 6)); // 11

// test the function with invalid inputs
console.log(add("a", "b")); // NaN
console.log(add(1, "b")); // NaN
console.log(add("a", 2)); // NaN

// test the function with floating point numbers
console.log(add(1.5, 2.5)); // 4
console.log(add(3.5, 4.5)); // 8
console.log(add(5.5, 6.5)); // 12

// test the function with negative numbers
console.log(add(-1, -2)); // -3
console.log(add(-3, -4)); // -7
console.log(add(-5, -6)); // -11

// test the function with zero
console.log(add(0, 0)); // 0
console.log(add(0, 1)); // 1
console.log(add(1, 0)); // 1

module.exports = add;