function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  // if (str.length === 1) {
  if (str.length <= 1) return str;
  //   return str[0];
  // }
  // return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
