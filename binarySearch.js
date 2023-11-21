function search(arr , target){
      let startIndex = 0
      let endIndex = arr.length-1
      while(startIndex <= endIndex){
            let middleIndex = Math.floor(startIndex + (startIndex+endIndex)/2)
            if(arr[middleIndex] == target){
                  return middleIndex
            }else if(arr[middleIndex] > target){
                  endIndex = middleIndex - 1
            }else if(arr[middleIndex] < target){
                  startIndex = middleIndex + 1
            }
      }
      return -1
}
const arr = [5,6,7,8,9,19,25,516]
console.log(search(arr,5));