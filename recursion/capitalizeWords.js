function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];

  if (arr.length === 0) {
    // can shortcut it to [0] when .length === 1
    return newArr;
  }

  newArr.push(arr[0].toUpperCase());

  newArr = newArr.concat(capitalizeWords(arr.slice(1)));

  return newArr;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
