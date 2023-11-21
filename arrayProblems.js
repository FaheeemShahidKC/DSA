function arr(arr, target) {
      const newArray = [];
      let newArrayIndex = 0;

      for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== target) {
                  newArray[newArrayIndex] = arr[i];
                  newArrayIndex++;
            }
      }
      return newArray
}

const aarray = [5, 9, 5, 6, 8, 6]
console.log(arr(aarray, 6));