class minHeap{
      constructor(){
            this.heap = new Array()
      }

      swap(arr, a, b){
            let temp = arr[a]
            arr[a] = arr[b]
            arr[b] = temp
      }

      leftChildInd(parentInd){
            return 2 * parentInd + 1;
      }

      rightChildInd(parentInd){
            return 2 * parentInd + 2;
      }

      parentInd(childInd){
            return Math.floor((childInd - 1) / 2);
      }

      minHeap(arr){
            this.buildHeap(arr)
      }

      buildHeap(arr){
            this.heap = arr
            for(let i = this.parentInd(this.heap.length - 1); i>=0; i--){
                  this.shiftDown(i)
            }
      }

      shiftDown(currentInd){
            let endInd = this.heap.length - 1
            let leftInd = this.leftChildInd(currentInd)
            while(leftInd <= endInd){
                  let rightInd = this.rightChildInd(currentInd)
                  let shiftInd
                  if(rightInd <= endInd && this.heap[rightInd] < this.heap[leftInd]){
                        shiftInd = rightInd
                  }else{
                        shiftInd = leftInd
                  }

                  if(this.heap[currentInd] > this.heap[shiftInd]){
                        this.swap(this.heap, shiftInd, currentInd)
                        currentInd = shiftInd
                        leftInd = this.leftChildInd(currentInd)
                  }else{
                        return
                  }
            }
      }

      shiftUp(currentInd){
            let parentInd = this.parentInd(currentInd)
            while (currentInd > 0 && this.heap[parentInd] > this.heap[currentInd]){
                  this.swap(this.heap, currentInd, parentInd)
                  currentInd = parentInd
                  parentInd = this.parentInd(currentInd)
            }
      }

      peek(){
            return this.heap[0]
      }

      remove(){
            this.heap[0] = this.heap.pop()
            this.shiftDown(0)
      }

      insert(value){
            this.heap.push(value)
            this.shiftUp(this.heap.length-1)
      }
      
      display(){
            console.log(this.heap);
      }
}

const heap = new minHeap();
const arrayToHeapify = [4, 10, 3, 5, 1];
heap.minHeap(arrayToHeapify);
console.log(heap.heap);
heap.remove();
console.log(heap.heap);
heap.insert(2);
console.log(heap.heap);
console.log(heap.peek());