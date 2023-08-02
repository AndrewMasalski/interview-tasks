/*
 Given a JSON object representing a nested book data, flatten it to a single-level JSON object.
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
