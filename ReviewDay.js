// class Node{
//       constructor(value){
//             this.value = value
//             this.next = null
//       }
// }

// class LinkedList{
//       constructor(){
//             this.head = null
//             this.tail = null
//             this.size = 0
//       }

//       isEmpty(){
//             return this.size === 0
//       }

//       prepend(value){
//             const node = new Node(value)
//             if(this.isEmpty()){
//                   this.head = node
//                   this.tail = node
//             }else{
//                   node.next = this.head
//                   this.head = node
//             }
//             this.size++
//       }

//       append(value){
//             const node = new Node(value)
//             if(this.isEmpty()){
//                   this.head = node
//                   this.tail = node
//             }else{
//                   this.tail.next = node
//                   this.tail = node
//             }
//             this.size++
//       }

//       insert(value,ind){
//             if(ind === 0){
//                   this.prepend(value)
//             }else{
//                   let node = new Node(value)
//                   let curr = this.head
//                   for(let i=0;i<ind-1;i++){
//                         curr = curr.next
//                   }
//                   node.next = curr.next
//                   curr.next = node
//                   this.size++
//             }
//       }

//       reverse(){
//             let curr = this.head
//             let prev = null
//             while(curr){
//                   let next = curr.next
//                   curr.next = prev
//                   prev = curr
//                   curr = next

//                   let next = curr.next
//                         curr.next = prev
//                         prev = curr
//                         curr = next
//             }
//       }

//       display(){
//             if(this.isEmpty()){
//                   console.log("Empty");
//             }else{
//                   let values = ''
//                   let curr = this.head
//                   while(curr){
//                         values += ` ${curr.value}`
//                         curr = curr.next
//                   }
//                   console.log(values);
//             }
//       }
// }

// const list = new LinkedList()
// list.append(6)
// list.prepend(5)
// list.append(6)
// list.display()
// list.search(6)

let arr = [4, 7, 5, 1, 8, 5, 0, 4]
let frequencyMap = {};
for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      frequencyMap[element] = (frequencyMap[element] || 0) + 1;
}

let maxElement;
let maxFrequency = 0;
for (let key in frequencyMap) {
      if (frequencyMap[key] > maxFrequency) {
            maxFrequency = frequencyMap[key];
            maxElement = key;
      }
}

// Multiply the max element by its frequency
let result = maxElement * maxFrequency;

console.log(maxElement + " * "+ maxFrequency + " = " + result);


console.log(frequencyMap);