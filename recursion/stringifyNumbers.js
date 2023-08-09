function stringifyNumbers(obj) {
  let newObj = {};

  for (let item in obj) {
    let value = obj[item];
    if (typeof value === "number") {
      newObj[item] = String(value);
    } else if (typeof value === "object" && !Array.isArray(value)) {
      newObj[item] = stringifyNumbers(value);
    } else {
      newObj[item] = value;
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
