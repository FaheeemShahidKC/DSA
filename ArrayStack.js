class Stack {
      constructor() {
            this.items = [];
      }

      isEmpty() {
            return this.items.length === 0;
      }

      push(item) {
            this.items.push(item);
      }

      pop() {
            if (!this.isEmpty()) {
                  return this.items.pop();
            } else {
                  console.log("Stack is empty");
            }
      }

      peek() {
            if (!this.isEmpty()) {
                  return this.items[this.items.length - 1];
            } else {
                  console.log("Stack is empty");
            }
      }

      size() {
            return this.items.length;
      }
}
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack:", stack.items);

console.log("Peek:", stack.peek());

const poppedItem = stack.pop();
console.log("Popped item:", poppedItem);

console.log("Stack after popping:", stack.items);
