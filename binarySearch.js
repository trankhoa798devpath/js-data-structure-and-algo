// can only work with sorted array
const binarySearch = (sortedArr, target) => {
  let left = 0;
  let right = sortedArr.length - 1;

  let mid = Math.floor((left + right) / 2);

  while (sortedArr[mid] !== target && left <= right) {
    if (sortedArr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return sortedArr[mid] === target ? mid : -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 11, 111, 1111], 11));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 11, 111, 1111], 12));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 11, 111, 1111], 1111));
