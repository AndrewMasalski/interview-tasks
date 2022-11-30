/*
Implement a function called getUniqueItems that takes two arrays as input and returns an array containing unique items from both arrays.
*/
function getUniqueItems(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2];
  return [...new Set(combinedArray)];
}

// Test the function
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueItems(array1, array2));
