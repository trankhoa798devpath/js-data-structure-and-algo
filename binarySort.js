const mergeSortedArray = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

const binarySort = (arr) => {
  if (arr.length == 1) return arr;
  const mid = Math.round(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return mergeSortedArray(binarySort(left), binarySort(right));
};

console.log(
  binarySort([1, 3, 45, 1, 2, 4, 5, 33, 22, 1, 6, 7, 8, 9, 99, 6, 102, 33])
);
