class LinearQueue {
      constructor() {
            this.queue = [];
      }

      enqueue(item) {
            this.queue.push(item);
      }

      dequeue() {
            if (this.queue.length === 0) {
                  console.log("Queue is empty");
                  return undefined;
            }
            return this.queue.shift();
      }

      front() {
            return this.queue.length === 0 ? undefined : this.queue[0];
      }

      isEmpty() {
            return this.queue.length === 0;
      }

      size() {
            return this.queue.length;
      }
}

const linearQueue = new LinearQueue();
linearQueue.enqueue(1);
linearQueue.enqueue(2);
linearQueue.enqueue(3);

console.log("Linear Queue:", linearQueue.queue);
console.log("Dequeued:", linearQueue.dequeue());
console.log("Front:", linearQueue.front());
console.log("Queue size:", linearQueue.size());