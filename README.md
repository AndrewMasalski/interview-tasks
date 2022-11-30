# JS interview tasks


## [async loop](/src/async-loop.js)
Implement a function asyncLoop that takes an array of asynchronous functions as input and executes them sequentially.
Each function returns a promise that resolves after a random delay (between 100ms and 500ms).
The asyncLoop function should wait for the completion of one function before starting the next one.
After all functions are executed, it should return an array containing their results in the order of execution.

## [limited event emmiter](/src/event-emitter.js)
Implement a custom EventEmitter class that allows registration of event handlers and emitting events with data.
However, there should be a feature to limit the maximum number of times an event can be emitted.
Once the event is emitted the maximum number of times, any further emissions should be ignored.

## [FIFO](/src/fifo.js)
Implement FIFO queue using stacks.
Optional task - implement peek() method.

## [flatten json](/src/flatten-json.js)
Given a JSON object representing a nested book data, flatten it to a single-level JSON object.
Optional task - implement unflatten() function as well.

## [map by field](/src/map-by-field.js)
Implement a function to create map from an array of objects by provided field name.

## [find sum of multiples](/src/math.js)
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Implement a function to find the sum of all the multiples of a or b below max. Can it be solved in O(1) time?

## [palindrome check](/src/palindrome.js)
Write a function called isPalindrome that takes a string as input and returns true if it's a palindrome, and false otherwise.

## [product](/src/product.js)
Write a function that takes an array of numbers and returns their multiplication result.

## [promises to async/await](/src/promises2async.js)
Rewrite the function to use async/await instead of promises chain.

## [read multiple files concurrently](/src/read-files-concurrently.js)
Create a function readFilesConcurrently that takes an array of file paths and reads their contents concurrently.
The function should return an object where keys are file paths, and values are the contents of the respective files.
Requirements:
- The function should read files asynchronously to improve performance.
- It should use a maximum of 3 concurrent file reads at any given time to avoid overwhelming the system.

## [tree traversal](/src/tree.js)
You are given a basic implementation of a binary tree node in JavaScript.
Your task is to implement different tree traversal algorithms: Pre-order, In-order, and Post-order traversal.

## [find unique items](/src/unique-items.js)
Implement a function called getUniqueItems that takes two arrays as input and returns an array containing unique items from both arrays.