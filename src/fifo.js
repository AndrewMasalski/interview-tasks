/*
Implement FIFO queue using LIFO stacks.

Optional task - implement peek() method.
*/

class QueueUsingStacks {
  // Your implementation
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }

  // Add an element to the back of the queue
  enqueue(item) {
    this.enqueueStack.push(item);
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    // Move elements from enqueueStack to dequeueStack if dequeueStack is empty
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length > 0) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }

    return this.dequeueStack.pop();
  }

  isEmpty() {
    return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
  }

  size() {
    return this.enqueueStack.length + this.dequeueStack.length;
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
