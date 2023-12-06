class Node{
      constructor(value){
            this.value = value
            this.next = null
            this.prev = null
      }
}


class linkedList {
      constructor(value){
            this.head = null
            this.tail = null
            this.size = 0            
      }

      isEmpty(){
            return this.size === 0
      }

      // getSize() {
      //       return this.size
      // }

      appendNode(value){
            const node = new Node(value)
            if(this.isEmpty()){
                  this.head = node
                  this.tail = node
            }else{
                  this.tail.next = node
                  this.tail = node
            }
            this.size++
      }

      prependNode(value){
            const node = new Node(value)
            if(this.isEmpty()){
                  this.head = node
                  this.tail = node
            }else{
                  node.next = this.head
                  this.head = node
            }
            this.size++
      }

      insertNode(value , ind){
            if(ind === 0){
                  this.prependNode(value)
            }else{
                  const node = new Node(value)
                  let prev = this.head
                  for(let i=0 ; i<ind - 1 ; i++){
                        prev = prev.next
                  }
                  node.next = prev.next
                  prev.next = node
                  this.size++
            }
      }

      removeNode(value){
            let prev = this.head
            let remv
            while(prev.next && prev.next.value !== value){
                  prev = prev.next
            }
            if(prev.next){
                  remv = prev.next
                  prev.next = remv.next
                  this.size--
            }     
      }

      search(value){
            let curr = this.head
            let i = 0
            console.log("==========");
            while(curr){
                  if(curr.value === value){
                        console.log(i);
                  }
                  curr = curr.next
                  i++
            }
      }

      reverse(){
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

      display(){
            if(this.isEmpty()){
                  console.log("Emptyyyyyyyyy");
            }else{
                  let curr = this.head
                  while(curr){
                        console.log(curr.value);
                        curr = curr.next
                  }
            }
      }

}

let list = new linkedList
list.appendNode(5)
list.appendNode(5)
list.prependNode(55)
list.insertNode(11,2)
list.display()
list.search(5)