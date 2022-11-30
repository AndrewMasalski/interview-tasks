/*
Write a function that takes an array of numbers and returns their multiplication result.
*/
function calculateProduct(numbers) {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, curr) => acc * curr, 1);
  return sum / numbers.length;
}

// Test the function
const numbers = [1, 2, 3, 4];
console.log(`product=${calculateProduct(numbers)}`);
