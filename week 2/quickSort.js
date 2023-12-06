function quickSort(arr, startInd = 0, endInd = arr.length - 1) {
      if (startInd >= endInd) {
            return
      }

      let pivot = endInd
      let leftInd = startInd
      let rightInd = endInd - 1

      while (leftInd <= rightInd) {
            if (arr[leftInd] > arr[pivot] && arr[rightInd] < arr[pivot]) {
                  swap(arr, leftInd, rightInd)
                  leftInd++
                  rightInd--
            } else if (arr[rightInd] >= arr[pivot]) {
                  rightInd--
            } else if (arr[leftInd] <= arr[pivot]) {
                  leftInd++
            }
      }

      swap(arr, leftInd, pivot)
      quickSort(arr, leftInd + 1, endInd)
      quickSort(arr, startInd, leftInd - 1)
      return arr
}

function swap(arr, leftInd, rightInd) {
      let temp = arr[leftInd]
      arr[leftInd] = arr[rightInd]
      arr[rightInd] = temp
}

console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));