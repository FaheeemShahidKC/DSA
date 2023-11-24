function print(arr){
      let mid = Math.floor(arr.length/2)
      let start = mid-1
      let end = mid+1
      console.log(arr[mid]);
      for(i=0 ; i<mid ; i++){
            console.log(arr[start]);
            console.log(arr[end]);
            start--
            end++
      }
}

print([1,2,5,1,54,5,5])