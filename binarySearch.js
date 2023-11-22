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

function srch(arr,value){
      let start = 0
      let end = arr.length - 1
      return hlpr(arr,value,start,end)
}
function hlpr(arr,value,start,end){
      let mid = Math.floor(start + (end - start/2))
      if(value === arr[mid]){
            return mid
      }else if(value > arr[mid]){
            start = mid + 1 
            return hlpr(arr,value,start,end)
      }else if(value < arr[mid]){
            end = mid - 1
            return hlpr(arr,value,start,end)
      }else{
            return -1
      }
}

const arr = [5,6,7,8,9,19,25,516]
console.log(srch(arr,9));