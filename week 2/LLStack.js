class Node{
      constructor(value){
            this.value = value
            this.next = null
      }
}

class LinkedList{
      constructor(){
            this.top = null
            this.size = 0
      }

      isEmpty(){
            return this.size == 0
      }

      push(value){
            const node = new Node(value)
            if(this.isEmpty()){
                  this.top = node
            }else{
                  node.next = this.top
                  this.top = node
            }
            this.size++
      }

      pop(){
            if(this.isEmpty()){
                  console.log("No element to remove");
            }else{
                  this.top = this.top.next
            }
      }

      peek(){
            if(this.isEmpty()){
                  console.log("No element to remove");
            }else{
                  console.log(this.top.value);
            }
      }

      display(){
            if(this.isEmpty()){
                  console.log("Empty");
            }else{
                  let curr = this.top
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
list.push(5)
list.push(54)
list.push(58)
list.peek()
list.pop()
list.display()