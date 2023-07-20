// function countUniqueValues(arr) {
//   if (arr.length <= 1) {
//     return arr.length;
//   }
//   let i = 0;
//   let j = 1;
//   let unique = 1;
//   while (i < arr.length - 1) {
//     if (arr[i] != arr[j]) {
//       unique++;
//     }
//     i++;
//     j++;
//   }
//   return unique;
// }

function countUniqueValues(arr) {
  if (arr.length <= 1) {
    return arr.length;
  }
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
