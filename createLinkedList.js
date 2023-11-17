class Node {
      constructor(value) {
            this.value = value
            this.next = null
      }
}

class LinkedList {
      constructor() {
            this.head = null
            this.tail = null
            this.size = 0
      }

      isEmpty() {
            return this.size === 0
      }

      getSize() {
            return this.size
      }

      prependNode(value) {
            const node = new Node(value)
            if (this.isEmpty()) {
                  this.head = node
                  this.tail = node
            } else {
                  node.next = this.head
                  this.head = node
            }
            this.size++
      }

      appendNode(value) {
            const node = new Node(value);
            if (this.isEmpty()) {
                  this.head = node;
                  this.tail = node;
            } else {
                  this.tail.next = node;
                  this.tail = node;
            }
            this.size++;
      }

      displayList() {
            if (this.isEmpty()) {
                  console.log("List is empty");
            } else {
                  let curr = this.head
                  while (curr) {
                        console.log('Head : ' , this.head);
                        console.log('Tail : ' , this.tail);
                        console.log('Value : ' , curr.value);
                        console.log("===========================");
                        curr = curr.next
                  }
            }
      }
}

const list = new LinkedList()
list.prependNode(50)
list.displayList()