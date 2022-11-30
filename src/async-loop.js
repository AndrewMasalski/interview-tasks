async function asyncFunction(delay) {
  return new Promise((resolve) => setTimeout(() => resolve(delay), delay));
}

async function asyncLoop(asyncFunctions) {
  const res = [];
  // Your implementation here
  for (const fn of asyncFunctions) {
    res.push(await fn());
  }
  return res;
}

const functions = [
  () => asyncFunction(200),
  () => asyncFunction(300),
  () => asyncFunction(100),
];

(async () => {
  const results = await asyncLoop(functions);
  console.log(results); // Output should be an array like [200, 300, 100]
})();
