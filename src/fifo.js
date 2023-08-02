/*
Implement FIFO queue using LIFO stacks.
*/

class QueueUsingStacks {
  // Your implementation
  constructor() {
  }

  // Add an element to the back of the queue
  enqueue(item) {
  }

  // Remove and return the front element of the queue
  dequeue() {
  }

  size() {
  }
}

// Example usage:
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

queue.enqueue(4);
console.log(`queue size: ${queue.size()}`); // Output: 2

console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
console.log(`queue size: ${queue.size()}`); // Output: 0
