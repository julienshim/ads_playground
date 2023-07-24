function findLongestSubstring(str) {
  let max = -Infinity;
  let seen = {};

  if (str.length <= 1) return str.length;

  let curIndex = 0;
  let curLength = 0;

  while (curIndex < str.length) {
    const char = str[curIndex];
    if (!(char in seen)) {
      seen[char] = curIndex;
      curIndex++;
      curLength++;
    } else {
      max = Math.max(max, curLength);
      curIndex = seen[char] + 1;
      seen = {};
      curLength = 0;
    }
  }

  max = Math.max(max, curLength);

  return max;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6

//   console.log(findLongestSubstring("")); // 0
//   console.log(findLongestSubstring("rithmschool")); // 7
//   console.log(findLongestSubstring("thisisawesome")); // 6
//   console.log(findLongestSubstring("thecatinthehat")); // 7
//   console.log(findLongestSubstring("bbbbbb")); // 1
//   console.log(findLongestSubstring("longestsubstring")); // 8
//   console.log(findLongestSubstring("thisishowwedoit")); // 6
