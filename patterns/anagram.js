// assume single words, all lowercase

function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  if (str1 == str2) {
    return true;
  }
  const p1 = {};
  //   const p2 = {};

  for (let i of str1) {
    p1[i] = (p1[i] || 0) + 1;
  }

  //   for (let j of str2) {
  //     p2[j] = (p2[j] || 0) + 1;
  //   }

  for (let j of str2) {
    if (!p1[j]) {
      return false;
    } else {
      p1[j] -= 1;
    }
    // if (!i in p2) {
    //   return false;
    // }
    // if (p1[i] != p2[i]) {
    //   return false;
    // }
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
