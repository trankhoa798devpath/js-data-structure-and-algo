// Go from beginning to the end
// Swap if condition
// should go from end to start not to repeat task
const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      // ascending sort
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    // console.log(arr);
    if (!isSwap) return arr;
  }
  return arr;
};

console.log(bubbleSort([1, 2, 3, 4, 6, 5]));
