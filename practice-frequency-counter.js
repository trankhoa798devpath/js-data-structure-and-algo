// Đề bài

// cho 2 số tự nhiên bất kỳ n1, n2
// viết hàm xác nhận 2 số này có chứa những số khác nhau không
// lưu ý ko biến đổi 2 số này thành dạng chuỗi

// isHavingSameNumbers(0,0) // true
// isHavingSameNumbers(123, 321) // true
// isHavingSameNumbers(12, 123) // false
// isHavingSameNumbers(012, 102) // false
function isHavingSameNumbers(n1, n2) {
  if (n1 === n2) return true;
  // 123 321
  // {1: 1, 2: 1, 3:1}
  // {1: 1, 2: 1, 3:1}
  // 123%10 = 3 (12)
  // 12%10 = 2 (1)
  // 1%10 = 1 (0)
  // 0 -> stop iteration
  let dividend1 = n1;
  const DIVISOR = 10;
  let frequencyCounterN1 = {};
  while (dividend1 !== 0) {
    frequencyCounterN1[dividend1 % DIVISOR] =
      (frequencyCounterN1[dividend1 % DIVISOR] || 0) + 1;
    dividend1 = Math.floor(dividend1 / DIVISOR);
  }

  console.log(frequencyCounterN1);
}

console.log(isHavingSameNumbers(123, 321));
