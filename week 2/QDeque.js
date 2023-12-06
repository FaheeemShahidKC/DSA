class Deque {
      constructor() {
            this.deque = [];
      }

      enqueueFront(item) {
            this.deque.unshift(item);
      }

      enqueueRear(item) {
            this.deque.push(item);
      }

      dequeueFront() {
            if (this.isEmpty()) {
                  console.log("Deque is empty");
                  return undefined;
            }
            return this.deque.shift();
      }

      dequeueRear() {
            if (this.isEmpty()) {
                  console.log("Deque is empty");
                  return undefined;
            }
            return this.deque.pop();
      }

      front() {
            return this.isEmpty() ? undefined : this.deque[0];
      }

      rear() {
            return this.isEmpty() ? undefined : this.deque[this.deque.length - 1];
      }

      isEmpty() {
            return this.deque.length === 0;
      }

      size() {
            return this.deque.length;
      }
}

// Example usage:
const deque = new Deque();
deque.enqueueRear(1);
deque.enqueueRear(2);
deque.enqueueFront(3);

console.log("Deque:", deque.deque);
console.log("Dequeue Front:", deque.dequeueFront());
console.log("Dequeue Rear:", deque.dequeueRear());
console.log("Front:", deque.front());
console.log("Rear:", deque.rear());
console.log("Deque size:", deque.size());
