/*
Rewrite the main function to use async/await instead of promises chain.
*/
function main() {
  getData(10)
    .then(processData)
    .then(saveData)
    .then(() => {
      console.log("All operations completed");
    })
    .catch((err) => {
      console.error("Error occurred:", err);
    });
}

main();

function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${value} has been fetched`);
      resolve(value);
    }, Math.random() * 333);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${data} has been processed`);
      resolve(data + 1);
    }, Math.random() * 333);
  });
}

function saveData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data ${data} has been saved`);
      resolve();
    }, Math.random() * 333);
  });
}
