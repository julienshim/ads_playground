function minSubArrayLen(arr, sum) {
  let i = 0;
  let min = 0;

  while (i < arr.length - 1) {
    let tmp = arr[i];
    if (arr[i] >= sum) {
      return 1;
    }
    for (let j = i + 1; j < arr.length; j++) {
      tmp += arr[j];
      if (tmp >= sum) {
        min = min == 0 ? j + 1 - i : Math.min(min, j + 1 - i);
        break; // don't need to go further
      }
    }
    i++;
  }

  return min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
