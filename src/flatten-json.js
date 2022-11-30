/*
 Given a JSON object representing a nested book data, flatten it to a single-level JSON object.

 Optional task - implement unflatten() function as well.
*/

const book = {
  title: "Sample Book",
  author: {
    name: "John Doe",
    age: 40,
  },
  publisher: {
    name: "XYZ Publications",
    location: "New York",
  },
};

function flattenJSON(jsonData) {
  // Your implementation
  const result = {};

  function flatten(obj, parentKey = "") {
    for (const key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object") {
        flatten(obj[key], newKey);
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  flatten(jsonData);
  return result;
}

function unflattenJSON(obj) {
  const result = {};
  for (const key in obj) {
    const keys = key.split(".");
    keys.reduce((acc, currKey, index) => {
      if (index === keys.length - 1) {
        acc[currKey] = obj[key];
      } else if (!acc[currKey]) {
        acc[currKey] = {};
      }
      return acc[currKey];
    }, result);
  }
  return result;
}

const flattenedBook = flattenJSON(book);
console.log(flattenedBook);
/* Output:
{
  "title": "Sample Book",
  "author_name": "John Doe",
  "author_age": 40,
  "publisher_name": "XYZ Publications",
  "publisher_location": "New York"
}
*/

console.log(unflattenJSON(flattenedBook));
