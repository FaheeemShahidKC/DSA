function selection(arr) {
      for (let j = 0; j < arr.length; j++) {
            let small = arr[j];
            let key = j;
            for (let i = j + 1; i < arr.length; i++) {
                  if (arr[i] < small) {
                        small = arr[i];
                        key = i;
                  }
            }
            arr[key] = arr[j];
            arr[j] = small;
      }
      console.log(arr);
}

selection([9, 8, 7, 56, 725, 4, 273, 2, 1, 0]);