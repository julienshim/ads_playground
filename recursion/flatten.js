function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];

  function helper(helperArr) {
    // could loop into itself, see below
    if (helperArr.length == 0) return;

    if (typeof helperArr[0] === "number") {
      newArr.push(helperArr[0]);
    }

    if (Array.isArray(helperArr[0])) {
      helper(helperArr[0]);
    }

    helper(helperArr.slice(1));
  }

  helper(arr);

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// alternative

// function flatten(oldArr){
//   var newArr = []
//     for(var i = 0; i < oldArr.length; i++){
//       if(Array.isArray(oldArr[i])){
//           newArr = newArr.concat(flatten(oldArr[i]))
//       } else {
//           newArr.push(oldArr[i])
//       }
//   }
//   return newArr;
// }
