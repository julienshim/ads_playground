function collectStrings(obj) {
  let arr = [];

  for (let item in obj) {
    let value = obj[item];
    if (typeof value === "string") {
      arr.push(value);
    } else if (typeof obj === "object" && !Array.isArray(obj)) {
      arr = arr.concat(collectStrings(value));
    }
  }

  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
