function deepEqual(value1, value2) {
  let areEqual;

    if ((typeof(value1) === typeof(value2)) && typeof(value1) === "object") {
      if ((value1 === value2) === null) {
        areEqual = true;
      }
      let keysArr = Object.keys(value2);
      for (let el in value1) {
        if (keysArr.includes(value1[el])) {
          areEqual = deepEqual(value1[el], value2[el]);
        }
      }
    } else if (value1 === value2) {
    areEqual = true;
    } else {
      return false;
    }
    return areEqual;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true