function maxSubarraySum(arr, n) {
  // add whatever parameters you deem necessary - good luck!
  if (n > arr.length) return null;

  //  initial sum
  let max = arr.slice(0, n).reduce((a, b) => a + b, 0);
  let sum = max;

  for (let j = n; j < arr.length; j++) {
    sum = sum - arr[j - n] + arr[j];
    // if (sum > max) {
    //   max = sum;
    // }
    max = Math.max(max, sum);
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
