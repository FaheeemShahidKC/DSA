class Node{
      constructor(value){
            this.value = value
            this.next = null
      }
}

class LinkedList{
      constructor(){
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

      appendNode(value){
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

      removeDup(){
            let curr = this.head
            while(curr != null){
                  let next = curr.next
                  while(next != null && curr.value == next.value){
                        next = next.next
                  }

                  curr.next = next

                  if(next == this.tail && curr.value == next.value){
                        this.tail = curr
                  }

                  curr = next
            }
      }

      displayList() {
            if (this.isEmpty()) {
                  console.log("List is empty");
            } else {
                  let curr = this.head
                  let listValues = ''
                  while (curr) {
                        listValues += ` ${curr.value}`
                        curr = curr.next
                  }
                  console.log(listValues);
            }
      }
}

const list = new LinkedList()
list.appendNode(20)
list.appendNode(20)
list.appendNode(20)
list.appendNode(10)
list.displayList()
list.removeDup()
list.displayList()