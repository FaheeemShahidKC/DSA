class PriorityQueue {
      constructor() {
            this.queue = [];
      }

      enqueue(item, priority) {
            this.queue.push({ item, priority });
            this.queue.sort((a, b) => a.priority - b.priority);
      }

      dequeue() {
            if (this.isEmpty()) {
                  console.log("Queue is empty");
                  return undefined;
            }
            return this.queue.shift().item;
      }

      front() {
            return this.isEmpty() ? undefined : this.queue[0].item;
      }

      isEmpty() {
            return this.queue.length === 0;
      }

      size() {
            return this.queue.length;
            console.log(this.queue);
      }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log("Priority Queue:", priorityQueue.queue);
console.log("Dequeued:", priorityQueue.dequeue());
console.log("Front:", priorityQueue.front());
console.log("Queue size:", priorityQueue.size());