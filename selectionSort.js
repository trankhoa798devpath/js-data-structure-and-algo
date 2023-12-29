// go from end to start
// get min and swap
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      console.log(arr);
    }
  }
  return arr;
};

selectionSort([7, 6, 5, 3, 1, 3, 4, 5, 6, 2]);
