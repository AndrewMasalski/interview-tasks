/*
Custom EventEmitter
Description: Create a custom EventEmitter class that allows registration of event handlers and emitting events with data.
However, there should be a feature to limit the maximum number of times an event can be emitted.
Once the event is emitted the maximum number of times, any further emissions should be ignored.

Optional task - implement once() method
*/
class LimitedEventEmitter {
  // your implementation
  constructor() {
  }

  on(eventName, handler) {
  }

  setMaxEmits(eventName, maxEmits) {
  }

  emit(eventName, data) {
  }
}

// Test event emitter
const eventEmitter = new LimitedEventEmitter();

// Register event handlers
const handler1 = (data) => console.log("Handler 1:", data);
const handler2 = (data) => console.log("Handler 2:", data);
eventEmitter.on("event1", handler1);
eventEmitter.on("event1", handler2);

// Set maximum emits for 'event1' to 2
eventEmitter.setMaxEmits("event1", 2);

// Emit the event1 multiple times
eventEmitter.emit("event1", "First emission"); // Output: Handler 1: First emission, Handler 2: First emission
eventEmitter.emit("event1", "Second emission"); // Output: Handler 1: Second emission, Handler 2: Second emission
eventEmitter.emit("event1", "Third emission"); // No output, maximum limit reached

// handler2 should still work, but only once more due to the set limit
eventEmitter.emit("event1", "Fourth emission"); // Output: Handler 2: Fourth emission
eventEmitter.emit("event1", "Fifth emission"); // No output, maximum limit reached
