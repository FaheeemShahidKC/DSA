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

      insertNode(value, index) {
            if (index < 0 || index > this.size) {
                  return
            }
            if (index === 0) {
                  this.prependNode(value)
            } else {
                  const node = new Node(value)
                  let prev = this.head
                  for (let i = 0; i < index - 1; i++) {
                        prev = prev.next
                  }
                  node.next = prev.next
                  prev.next = node
                  this.size++
            }
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

      printRev(num){
            let size=this.size-num
            let curr = this.head
            for(let i=0;i<size-1;i++){
                  curr = curr.next
            }
            console.log(curr.value);
      }

      removeValue(value) {
            if (this.isEmpty()) {
                  return null
            }
            let removeNode
            if (this.head.value === value) {
                  this.head = this.head.next
                  this.size--
                  return value
            } else {
                  let prev = this.head
                  while (prev.next && prev.next.value !== value) {
                        prev = prev.next
                  }
                  if (prev.next) {
                        removeNode = prev.next
                        prev.next = removeNode.next
                        this.size--
                        return value
                  }
                  return null
            }
      }

      searchValue(value) {
            if (this.isEmpty()) {
                  console.log("List is empty");
            } else {
                  let curr = this.head
                  let i = 0
                  let searchItem = ''
                  while (curr) {
                        if (curr.value == value) {
                              searchItem += ` ${i}`
                        }
                        curr = curr.next
                        i++
                  }
                  if (searchItem) {
                        console.log(searchItem);
                  } else {
                        console.log("No searched item");
                  }
            }
      }

      reverseList(){
            if (this.isEmpty()) {
                  console.log("List is empty");
            }else{
                  let curr = this.head
                  let prev = null
                  while(curr){
                        let next = curr.next
                        curr.next = prev
                        prev = curr
                        curr = next 
                  }
                  this.head = prev  
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
list.appendNode(48)
list.appendNode(30)
list.appendNode(10)
list.displayList()
list.printRev(2)
list.displayList()