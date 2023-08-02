/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Implement a function to find the sum of all the multiples of a or b below max. Can it be solved in O(1) time?
*/
function multiples(a, b, max) {
  const sumOfN = (n) => (n * (n + 1)) / 2;

  const numMultiplesOfA = Math.floor((max - 1) / a);
  const numMultiplesOfB = Math.floor((max - 1) / b);
  const numMultiplesOfAB = Math.floor((max - 1) / (a * b));

  const sumOfMultiplesOfX = a * sumOfN(numMultiplesOfA);
  const sumOfMultiplesOfY = b * sumOfN(numMultiplesOfB);
  const sumOfMultiplesOfXY = a * b * sumOfN(numMultiplesOfAB);

  return sumOfMultiplesOfX + sumOfMultiplesOfY - sumOfMultiplesOfXY;
}

// Test function
const sum0 = multiples(3, 5, 10);
console.log(sum0); // should output 23

const sum1 = multiples(3, 5, 1e9); // 1 billion
console.log(sum1); // should output 233333333166666700
