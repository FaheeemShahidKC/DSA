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

      removeNode(index) {
            if (index < 0 || index > this.size) {
                  return
            }
            let removedValue
            if (index === 0) {
                  removedValue = this.head
                  this.head = this.head.next
            } else {
                  let prev = this.head
                  for (let i = 0; i < index - 1; i++) {
                        prev = prev.next
                  }
                  removedValue = prev.next
                  prev.next = removedValue.next
            }
            this.size--
            return removedValue.value
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
list.appendNode(50)
list.appendNode(56)
list.displayList()
list.removeNode(50)
list.displayList()
