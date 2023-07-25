function isSubsequence(s1, s2) {
  // good luck. Add any arguments you deem necessary.
  let i = 0;
  let j = 0;
  if (!s1) {
    // account for no s1
    return true;
  }
  for (let j = 0; j < s2.length - 1; j++) {
    if (s2[j] === s1[i]) {
      i++;
    }
    if (i === s1.length - 1) {
      return true;
    }
  }
  return false;
}

// function isSubsequence(s1, s2) {
//   if (s1.length === 0) return true;
//   if (s2.length === 0) return false;
//   if (s2[0] === s1[0]) return isSubsequence(s1.slice(1), s2.slice(1));
//   return isSubsequence(s1, s2.slice(1));
// }

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order
