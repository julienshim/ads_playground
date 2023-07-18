function charCount(str) {
  const result = {};

  function isAlphaNumeric(x) {
    // NOTE: Regex
    // const alphanumericReg = /[a-z0-9]/;
    // return alphanumericReg.test(x);

    // NOTE: Char Code (Performance)
    const cc = x.charCodeAt(0);
    return (
      (cc > 47 && cc < 58) || (cc > 64 && cc < 91) || (cc > 96 && cc < 123)
    );
    // numeric (0-9) || upper alpha (A-Z) || lower alpha ( a-z )
  }

  const arr = [...str.toLowerCase()].filter(isAlphaNumeric);

  for (let a of arr) {
    // if (a in result) {
    //   result[a] += 1;
    // } else {
    //   result[a] = 1;
    // }
    result[a] = ++result[a] || 1;
  }

  return result;
}

const result = charCount("aaaa");
console.log(result);

const result2 = charCount("hello");
console.log(result2);

const result3 = charCount("Your PIN number is 1234!");
console.log(result3);
