// To manage a sub array in an array
// getMaxSubArray
// Input:
//      1. Array
//      2. an integer
// Output:
// An array forming from consequetive values of input array that has maximum value
// Example:
//      - getMaxSubArray([2,1,3,4,5,2,1], 3) => 3+4+5 -> 12
//      - getMaxSubArray([],3)                        -> null
//      - getMaxSubArray([1,2,1,2,3,1],4)             -> 8

function getMaxSubArray(arr, num) {
  if (arr.length < num) return null;

  // Ideas sliding window [ -> [] -> ]
  // ([2,3,3,1,2,5], 4)
  // get sum of 4 first numbers -> temp sum -> max sum
  // slide the subArray to the right -> update the temp sum -> compare with previous max sum
  // end of array -> return max sum
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  let maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    // [1,2,3,4,5]; num=3; i=3
    // tempSum = 6
    // tempSum = tempSum + arr[3] - arr(0) (i = 3 - num = 3)
    // tempSum = tempSum + arr[4] - arr(1) (i = 4 - num = 3)
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(getMaxSubArray([2, 1, 3, 4, 5, 2, 1], 3));
console.log(getMaxSubArray([1, 2, 1, 2, 3, 1], 4));
console.log(getMaxSubArray([], 3));
