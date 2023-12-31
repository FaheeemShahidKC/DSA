function maxHeapify(arr, index, size) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let largest = index;
      if (leftChild < size && arr[leftChild] > arr[largest]) {
            largest = leftChild;
      }
      if (rightChild < size && arr[rightChild] > arr[largest]) {
            largest = rightChild;
      }
      if (largest !== index) {
            let temp = arr[index]
            arr[index] = arr[largest]
            arr[largest] = temp
            maxHeapify(arr, largest, size)
      }
}

function heapSort(array) {
      const n = array.length;
      for (let i = Math.floor((n / 2) - 1); i >= 0; i--) {
            maxHeapify(array, i, n)
      }
      for (let j = n - 1; j >= 0; j--) {
            let temp = array[0]
            array[0] = array[j]
            array[j] = temp;
            maxHeapify(array, 0, j)
      }
      return array
}

console.log(heapSort([5, 5, 2, 65, 32, 5]))