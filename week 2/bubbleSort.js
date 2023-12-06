function bubble(arr) {
      let size = arr.length;
      for (let j = 0; j < size; j++) {
            for (let i = 0; i < size - 1 - j; i++) {
                  if (arr[i] > arr[i + 1]) {
                        let temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] = temp;
                  }
            }
      }
      console.log(arr);
}

bubble([58, 0, 8, 98, 1, 558, 6, 0, 8]);