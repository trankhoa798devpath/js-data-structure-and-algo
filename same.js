/**
 * Accepts 2 arrays
 *
 * Return true if every value in the array has its corresponding value
 * squared in the second array
 *
 * The frequecy must be the same
 * */

// same([1,2,3], [4,1,9]); => true
// same([1,2,3], [1,9]); => false
// same([1,2,1], [4,4,1]); => false
function same(arr1, arr2) {
  // Compare the length of both arrays => false if not equal
  // Count occurance frequecy in arr1
  // Count occurance frequecy in arr2
  // Compare

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (const num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 1];
const arr2 = [1, 1, 2];

console.log(same(arr1, arr2));
