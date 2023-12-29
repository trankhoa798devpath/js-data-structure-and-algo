const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let newI = i;
    while (j >= 0) {
      if (arr[j] === arr[newI]) {
        break;
      }
      if (arr[j] > arr[newI]) {
        [arr[j], arr[newI]] = [arr[newI], arr[j]];
        newI = j;
      }
      console.log(arr);
      j--;
    }
    // console.log(arr);
  }
};

insertionSort([3, 2, 1, 3, 2, 1]);
