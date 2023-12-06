function insertion(arr) {
      for (i = 1; i < arr.length; i++) {
            let curr = arr[i]
            let j = i - 1
            while (j >= 0 && arr[j] > curr) {
                  arr[j + 1] = arr[j];
                  j--;
            }
            arr[j + 1] = curr;
      }
      console.log(arr);
}

insertion([1,8,7,2,4])