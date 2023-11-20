function search(num){
      const arr = [2,8,4,5,8,59,8]
      for(i=0;i<arr.length;i++){
            if(num == arr[i]){
                  return i
            }
      }
      return -1
}

console.log(search(5));