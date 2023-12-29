// Đề bài

// cho 2 chuỗi string bất kỳ
// viết hàm xác nhận 2 chuỗi nay có chứa những ký tự giống nhau ko

// isHavingSameLetters('','') // false
// isHavingSameLetters('abc', 'cba') // true
// isHavingSameLetters('caa', 'cba') // false
// isHavingSameLetters('caa', 'aca') // true

function isHavingSameLetters(str1, str2) {
  //i = 0, i < str1.length
  //str2.length
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1.length === 0) return false;

  //   abc
  //   cab

  //   aac
  //   cca

  // a -> co a o str2 -> yes -> a: 1 no -> false
  // a -> co b o str2 -> yes -> a: 2 -> a
  // c -> co c o str2 -> yes ->
  // return true

  // aac => loops => {a: 2, c: 1}
  // 'a' -> co -> a: +1,

  let frequencyCounter1 = {};
  for (i = 0; i < str1.length; i++) {
    var letter = str1[i];
    if (!frequencyCounter1[letter]) {
      //undefined
      frequencyCounter1[letter] = 1;
    } else {
      frequencyCounter1[letter] += 1;
    }
    // frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  let frequencyCounter2 = {};
  for (i = 0; i < str2.length; i++) {
    var letter = str2[i];
    if (!frequencyCounter2[letter]) {
      //undefined
      frequencyCounter2[letter] = 1;
    } else {
      frequencyCounter2[letter] += 1;
    }
    // frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }

  // "cda", "aca"
  //{c: 1, d: 1, a: 1}
  //{a: 2, c: 1}

  // for (const key in frequencyCounter1) {
  //   console.log(`${key}: ${frequencyCounter1[key]}`);
  //   if (frequencyCounter2[key] !== frequencyCounter1[key]) {
  //     return false;
  //   }
  // }

  Object.keys(frequencyCounter1).map((key) => {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }

    console.log("key", key);
  });

  return true; //O(n)

  //   for (i = 0; i < str1.length; i++) {
  //     for (j = 0; j < str2.length; j++) {
  //       console.log("str1:", str1[i]);
  //       console.log("str2:", str2[j]);
  //     }
  //   } //O(n^2)
}

// console.log(isHavingSameLetters("abc", "cba"));
// console.log(isHavingSameLetters("abc", "cbad"));
// console.log(isHavingSameLetters("", ""));
// console.log(isHavingSameLetters("ffff", ""));
// console.log(isHavingSameLetters("caa", "cba"));
console.log(isHavingSameLetters("cad", "aca"));
