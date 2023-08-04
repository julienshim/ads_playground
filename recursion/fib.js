function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  let result = [1, 1];

  function helper(helperNum) {
    if (helperNum === 2) {
      return;
    }

    result.push(result[result.length - 1] + result[result.length - 2]);
    helper(helperNum - 1);
  }

  helper(num);

  return result[num - 1];
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }
