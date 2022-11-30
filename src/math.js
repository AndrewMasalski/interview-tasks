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

  const result = sumOfMultiplesOfX + sumOfMultiplesOfY - sumOfMultiplesOfXY;

  return result;
}

// functional solution
function multiplesFn(a, b, max) {
  return [...Array(max).keys()] //create array of numbers eg [0,1,2,3,...]
         .filter(x => !(x % a) || !(x % b)) //create array of plausible numbers - multiples of 3 and 5 [0,3,5]
         .reduce((acc,cur) => acc + cur);   
}

// Test function
const sum0 = multiples(3, 5, 10);
console.log(sum0); // should output 23

const sum1 = multiplesFn(3, 5, 10);
console.log(sum1); // should output 23