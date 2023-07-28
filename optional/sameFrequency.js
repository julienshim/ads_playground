function sameFrequency(n1, n2) {
  const p1 = {};
  for (let i of String(n1)) {
    p1[i] = (p1[i] || 0) + 1;
  }
  for (let j of String(n2)) {
    if (!p1[j]) {
      return false;
    } else {
      p1[j] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
