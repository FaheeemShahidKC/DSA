function Rec(arr,target){
      let startIndex = 0
      let endIndex = arr.length-1
      return search(arr,target,startIndex,endIndex)
}

function search(arr,target,startIndex,endIndex) {
      let middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2)
      if(arr[middleIndex] == target){
            return middleIndex
      }else if(arr[middleIndex] > target){
            return search(arr,target,startIndex,middleIndex-1)
      }else{
            return search(arr,target,middleIndex+1,endIndex)
      }
}
const arr = [1, 5, 8, 9, 19, 25, 516]
console.log(Rec(arr, 5));