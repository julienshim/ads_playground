function areThereDuplicates(...args) {
  const seen = {};
  for (let i of args) {
    if (seen[i]) {
      return true;
    } else {
      seen[i] = true;
    }
  }
  return false;
}

// function areThereDuplicates() {
//     return new Set(arguments).size != arguments.length
// }

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
