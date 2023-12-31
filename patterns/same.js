function same(arr1, arr2) {
  const a = arr1.sort();
  const b = arr2.sort();

  if (a.length != b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] ** 2 != b[i]) {
      return false;
    }
  }

  return true;
}

var time1 = performance.now();
const result1 = same(
  [
    3, 9, 12, 13, 14, 1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8,
    12, 13, 14, 15, 2, 8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7,
    12, 14, 18, 4, 6, 11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12,
    18, 19, 7, 10, 14, 17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14,
    20, 2, 5, 12, 17, 20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14,
    1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8, 12, 13, 14, 15, 2,
    8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7, 12, 14, 18, 4, 6,
    11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12, 18, 19, 7, 10, 14,
    17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14, 20, 2, 5, 12, 17,
    20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14, 1, 2, 9, 11, 13,
    5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8, 12, 13, 14, 15, 2, 8, 9, 12, 14, 2,
    6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7, 12, 14, 18, 4, 6, 11, 14, 16, 1, 5,
    9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12, 18, 19, 7, 10, 14, 17, 20, 1, 6, 7,
    16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14, 20, 2, 5, 12, 17, 20, 3, 4, 10, 12,
    17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14, 1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1,
    10, 13, 14, 17, 8, 12, 13, 14, 15, 2, 8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11,
    12, 16, 19, 4, 7, 12, 14, 18, 4, 6, 11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12,
    13, 19, 2, 5, 12, 18, 19, 7, 10, 14, 17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15,
    20, 2, 5, 13, 14, 20, 2, 5, 12, 17, 20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18,
    3, 9, 12, 13, 14, 1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8,
    12, 13, 14, 15, 2, 8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7,
    12, 14, 18, 4, 6, 11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12,
    18, 19, 7, 10, 14, 17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14,
    20, 2, 5, 12, 17, 20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14,
    1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8, 12, 13, 14, 15, 2,
    8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7, 12, 14, 18, 4, 6,
    11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12, 18, 19, 7, 10, 14,
    17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14, 20, 2, 5, 12, 17,
    20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18,
  ],
  [
    9, 81, 144, 169, 196, 1, 4, 81, 121, 169, 25, 36, 81, 100, 144, 1, 100, 169,
    196, 289, 64, 144, 169, 196, 225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144,
    9, 121, 144, 256, 361, 16, 49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25,
    81, 144, 169, 64, 81, 144, 169, 361, 4, 25, 144, 324, 361, 49, 100, 196,
    289, 400, 1, 36, 49, 256, 324, 1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4,
    25, 144, 289, 400, 9, 16, 100, 144, 289, 16, 81, 100, 225, 324, 9, 81, 144,
    169, 196, 1, 4, 81, 121, 169, 25, 36, 81, 100, 144, 1, 100, 169, 196, 289,
    64, 144, 169, 196, 225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144, 9, 121,
    144, 256, 361, 16, 49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25, 81, 144,
    169, 64, 81, 144, 169, 361, 4, 25, 144, 324, 361, 49, 100, 196, 289, 400, 1,
    36, 49, 256, 324, 1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4, 25, 144,
    289, 400, 9, 16, 100, 144, 289, 16, 81, 100, 225, 324, 9, 81, 144, 169, 196,
    1, 4, 81, 121, 169, 25, 36, 81, 100, 144, 1, 100, 169, 196, 289, 64, 144,
    169, 196, 225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144, 9, 121, 144, 256,
    361, 16, 49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25, 81, 144, 169, 64,
    81, 144, 169, 361, 4, 25, 144, 324, 361, 49, 100, 196, 289, 400, 1, 36, 49,
    256, 324, 1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4, 25, 144, 289, 400,
    9, 16, 100, 144, 289, 16, 81, 100, 225, 324, 9, 81, 144, 169, 196, 1, 4, 81,
    121, 169, 25, 36, 81, 100, 144, 1, 100, 169, 196, 289, 64, 144, 169, 196,
    225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144, 9, 121, 144, 256, 361, 16,
    49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25, 81, 144, 169, 64, 81, 144,
    169, 361, 4, 25, 144, 324, 361, 49, 100, 196, 289, 400, 1, 36, 49, 256, 324,
    1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4, 25, 144, 289, 400, 9, 16, 100,
    144, 289, 16, 81, 100, 225, 324, 9, 81, 144, 169, 196, 1, 4, 81, 121, 169,
    25, 36, 81, 100, 144, 1, 100, 169, 196, 289, 64, 144, 169, 196, 225, 4, 64,
    81, 144, 196, 4, 36, 81, 121, 144, 9, 121, 144, 256, 361, 16, 49, 144, 196,
    324, 16, 36, 121, 196, 256, 1, 25, 81, 144, 169, 64, 81, 144, 169, 361, 4,
    25, 144, 324, 361, 49, 100, 196, 289, 400, 1, 36, 49, 256, 324, 1, 4, 100,
    225, 400, 4, 25, 169, 196, 400, 4, 25, 144, 289, 400, 9, 16, 100, 144, 289,
    16, 81, 100, 225, 324, 9, 81, 144, 169, 196, 1, 4, 81, 121, 169, 25, 36, 81,
    100, 144, 1, 100, 169, 196, 289, 64, 144, 169, 196, 225, 4, 64, 81, 144,
    196, 4, 36, 81, 121, 144, 9, 121, 144, 256, 361, 16, 49, 144, 196, 324, 16,
    36, 121, 196, 256, 1, 25, 81, 144, 169, 64, 81, 144, 169, 361, 4, 25, 144,
    324, 361, 49, 100, 196, 289, 400, 1, 36, 49, 256, 324, 1, 4, 100, 225, 400,
    4, 25, 169, 196, 400, 4, 25, 144, 289, 400, 9, 16, 100, 144, 289, 16, 81,
    100, 225, 324,
  ]
); // true
var time2 = performance.now();
console.log(result1);
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

// const result2 = same([1, 2, 3], [1, 9]); // false
// console.log(result2);

// const result3 = same([1, 2, 1], [4, 4, 1]); // false (must be same frequence)
// console.log(result3);

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

var time1 = performance.now();
const result21 = same2(
  [
    3, 9, 12, 13, 14, 1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8,
    12, 13, 14, 15, 2, 8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7,
    12, 14, 18, 4, 6, 11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12,
    18, 19, 7, 10, 14, 17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14,
    20, 2, 5, 12, 17, 20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14,
    1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8, 12, 13, 14, 15, 2,
    8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7, 12, 14, 18, 4, 6,
    11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12, 18, 19, 7, 10, 14,
    17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14, 20, 2, 5, 12, 17,
    20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14, 1, 2, 9, 11, 13,
    5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8, 12, 13, 14, 15, 2, 8, 9, 12, 14, 2,
    6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7, 12, 14, 18, 4, 6, 11, 14, 16, 1, 5,
    9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12, 18, 19, 7, 10, 14, 17, 20, 1, 6, 7,
    16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14, 20, 2, 5, 12, 17, 20, 3, 4, 10, 12,
    17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14, 1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1,
    10, 13, 14, 17, 8, 12, 13, 14, 15, 2, 8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11,
    12, 16, 19, 4, 7, 12, 14, 18, 4, 6, 11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12,
    13, 19, 2, 5, 12, 18, 19, 7, 10, 14, 17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15,
    20, 2, 5, 13, 14, 20, 2, 5, 12, 17, 20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18,
    3, 9, 12, 13, 14, 1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8,
    12, 13, 14, 15, 2, 8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7,
    12, 14, 18, 4, 6, 11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12,
    18, 19, 7, 10, 14, 17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14,
    20, 2, 5, 12, 17, 20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18, 3, 9, 12, 13, 14,
    1, 2, 9, 11, 13, 5, 6, 9, 10, 12, 1, 10, 13, 14, 17, 8, 12, 13, 14, 15, 2,
    8, 9, 12, 14, 2, 6, 9, 11, 12, 3, 11, 12, 16, 19, 4, 7, 12, 14, 18, 4, 6,
    11, 14, 16, 1, 5, 9, 12, 13, 8, 9, 12, 13, 19, 2, 5, 12, 18, 19, 7, 10, 14,
    17, 20, 1, 6, 7, 16, 18, 1, 2, 10, 15, 20, 2, 5, 13, 14, 20, 2, 5, 12, 17,
    20, 3, 4, 10, 12, 17, 4, 9, 10, 15, 18,
  ],
  [
    9, 81, 144, 169, 196, 1, 4, 81, 121, 169, 25, 36, 81, 100, 144, 1, 100, 169,
    196, 289, 64, 144, 169, 196, 225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144,
    9, 121, 144, 256, 361, 16, 49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25,
    81, 144, 169, 64, 81, 144, 169, 361, 4, 25, 144, 324, 361, 49, 100, 196,
    289, 400, 1, 36, 49, 256, 324, 1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4,
    25, 144, 289, 400, 9, 16, 100, 144, 289, 16, 81, 100, 225, 324, 9, 81, 144,
    169, 196, 1, 4, 81, 121, 169, 25, 36, 81, 100, 144, 1, 100, 169, 196, 289,
    64, 144, 169, 196, 225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144, 9, 121,
    144, 256, 361, 16, 49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25, 81, 144,
    169, 64, 81, 144, 169, 361, 4, 25, 144, 324, 361, 49, 100, 196, 289, 400, 1,
    36, 49, 256, 324, 1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4, 25, 144,
    289, 400, 9, 16, 100, 144, 289, 16, 81, 100, 225, 324, 9, 81, 144, 169, 196,
    1, 4, 81, 121, 169, 25, 36, 81, 100, 144, 1, 100, 169, 196, 289, 64, 144,
    169, 196, 225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144, 9, 121, 144, 256,
    361, 16, 49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25, 81, 144, 169, 64,
    81, 144, 169, 361, 4, 25, 144, 324, 361, 49, 100, 196, 289, 400, 1, 36, 49,
    256, 324, 1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4, 25, 144, 289, 400,
    9, 16, 100, 144, 289, 16, 81, 100, 225, 324, 9, 81, 144, 169, 196, 1, 4, 81,
    121, 169, 25, 36, 81, 100, 144, 1, 100, 169, 196, 289, 64, 144, 169, 196,
    225, 4, 64, 81, 144, 196, 4, 36, 81, 121, 144, 9, 121, 144, 256, 361, 16,
    49, 144, 196, 324, 16, 36, 121, 196, 256, 1, 25, 81, 144, 169, 64, 81, 144,
    169, 361, 4, 25, 144, 324, 361, 49, 100, 196, 289, 400, 1, 36, 49, 256, 324,
    1, 4, 100, 225, 400, 4, 25, 169, 196, 400, 4, 25, 144, 289, 400, 9, 16, 100,
    144, 289, 16, 81, 100, 225, 324, 9, 81, 144, 169, 196, 1, 4, 81, 121, 169,
    25, 36, 81, 100, 144, 1, 100, 169, 196, 289, 64, 144, 169, 196, 225, 4, 64,
    81, 144, 196, 4, 36, 81, 121, 144, 9, 121, 144, 256, 361, 16, 49, 144, 196,
    324, 16, 36, 121, 196, 256, 1, 25, 81, 144, 169, 64, 81, 144, 169, 361, 4,
    25, 144, 324, 361, 49, 100, 196, 289, 400, 1, 36, 49, 256, 324, 1, 4, 100,
    225, 400, 4, 25, 169, 196, 400, 4, 25, 144, 289, 400, 9, 16, 100, 144, 289,
    16, 81, 100, 225, 324, 9, 81, 144, 169, 196, 1, 4, 81, 121, 169, 25, 36, 81,
    100, 144, 1, 100, 169, 196, 289, 64, 144, 169, 196, 225, 4, 64, 81, 144,
    196, 4, 36, 81, 121, 144, 9, 121, 144, 256, 361, 16, 49, 144, 196, 324, 16,
    36, 121, 196, 256, 1, 25, 81, 144, 169, 64, 81, 144, 169, 361, 4, 25, 144,
    324, 361, 49, 100, 196, 289, 400, 1, 36, 49, 256, 324, 1, 4, 100, 225, 400,
    4, 25, 169, 196, 400, 4, 25, 144, 289, 400, 9, 16, 100, 144, 289, 16, 81,
    100, 225, 324,
  ]
); // true
var time2 = performance.now();
console.log(result21);
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
