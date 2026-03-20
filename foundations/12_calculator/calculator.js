const add = function(a, b) {
	return console.log(a + b);
};

add(3, 4);

const subtract = function(a, b) {
	return console.log(a - b);
};

subtract(5, 12)

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

console.log(sum([1,2,3,4,5,6,7]));

const multiply = function(array) {
    return array.reduce((product, current) => product * current);
};

console.log(multiply([1,2,3,4,5,6,7]));

const power = function(a, b) {
	return console.log(a ** b);
};

power(3,3)

const factorial = function(n) {
	let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

console.log(factorial(6));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
