class CircularQueue {
      constructor(capacity) {
            this.queue = new Array(capacity);
            this.front = this.rear = -1;
            this.capacity = capacity;
      }

      enqueue(item) {
            if ((this.rear + 1) % this.capacity === this.front) {
                  console.log("Queue is full");
                  return;
            }

            if (this.front === -1) {
                  this.front = this.rear = 0;
            } else {
                  this.rear = (this.rear + 1) % this.capacity;
            }

            this.queue[this.rear] = item;
      }

      dequeue() {
            if (this.front === -1) {
                  console.log("Queue is empty");
                  return undefined;
            }

            const item = this.queue[this.front];
            if (this.front === this.rear) {
                  this.front = this.rear = -1;
            } else {
                  this.front = (this.front + 1) % this.capacity;
            }

            return item;
      }

      front() {
            return this.front === -1 ? undefined : this.queue[this.front];
      }

      isEmpty() {
            return this.front === -1;
      }

      size() {
            if (this.front === -1) return 0;
            return (this.rear + this.capacity - this.front) % this.capacity + 1;
      }
}
const circularQueue = new CircularQueue(3);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);

console.log("Circular Queue:", circularQueue.queue);
console.log("Dequeued:", circularQueue.dequeue());
console.log("Circular Queue:", circularQueue.queue);
console.log("Front:", circularQueue.front());
console.log("Queue size:", circularQueue.size());