function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var t1 = performance.now();
console.log(addUpTo(6));
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
