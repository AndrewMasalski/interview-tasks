/*
    Implement a function to create map from an array of objects by provided field name
*/
function createMapByField(arr, field) {
  const map = new Map();

  arr.forEach((obj) => {
    const fieldValue = obj[field];
    if (!map.has(fieldValue)) {
      map.set(fieldValue, []);
    }
    map.get(fieldValue).push(obj);
  });

  return map;
}

const data = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 4, name: "Alice", age: 28 },
];

const result = createMapByField(data, "name");
console.log(result);
/* Output
Map(3) {
  'Alice' => [
    { id: 1, name: 'Alice', age: 30 },
    { id: 4, name: 'Alice', age: 28 }
  ],
  'Bob' => [ { id: 2, name: 'Bob', age: 25 } ],
  'Charlie' => [ { id: 3, name: 'Charlie', age: 35 } ]
}
*/
