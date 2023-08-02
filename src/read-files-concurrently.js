/*
Create a function readFilesConcurrently that takes an array of file paths and reads their contents concurrently.
The function should return an object where keys are file paths, and values are the contents of the respective files.
Requirements:
- The function should read files asynchronously to improve performance.
- It should use a maximum of 3 concurrent file reads at any given time to avoid overwhelming the system.
*/
const fsPromises = require('fs').promises;

const INPUT_FOLDER = 'input';

async function readFilesConcurrently(filePaths, maxConcurrentReads) {
  // Your implementation here
}

const filePaths = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
readFilesConcurrently(filePaths, 3)
  .then((fileContents) => {
    Object.values(fileContents).forEach(text => console.log(text)); // should output sonnet
  });
