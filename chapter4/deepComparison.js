function deepEqual(value1, value2) {
  let areEqual;
  if ((typeof(value1) === "object" && value1 !== null) 
  && 
  (typeof(value2) === "object" && value2 !== null)) {
    let value1Arr = Object.keys(value1);
    let value2Arr = Object.keys(value2);
    if (value1Arr.length != value2Arr.length) {
      areEqual = false;
    }
    for (let el of value1Arr) {
      // console.log(`el: ${el}, value1[el] ${value1[el]}`)
      if (value2Arr.includes(el)) {
        // console.log(`includes something`)
        areEqual = deepEqual(value1[el], value2[el]);
      } else {
        areEqual = false;
      }
    }
    // for (let el in value1) {
    //   if (keysArr.includes(value1[el])) {
    //     areEqual = deepEqual(value1[el], value2[el]);
    //   }
    // }
  } else if (value1 !== value2) {
    // areEqual = true;
    console.log("Am I ever false?")
    areEqual = false;
  } else {
    console.log("In else with nothing to do.")
  }
  return false;
  // return areEqual;
}

function deepEqualTest(obj1, obj2) {
  let areEqual;
  if ((typeof(obj1) === "object" && obj1 !== null)
      &&
      (typeof(obj2) === "object" && obj2 !== null)) {
        console.log(`both objs should be objects and not null
  obj1: ${obj1}, typeof obj1: ${typeof(obj1)}
  obj2: ${obj2}, typeof obj2: ${typeof(obj2)}`);
    let keyArr1 = Object.keys(obj1);
    let keyArr2 = Object.keys(obj2);
        console.log(`Value of both keyArr's-> keyArr1: ${keyArr1}, keyArr2: ${keyArr2}`);
    if (keyArr1.length == keyArr2.length) {
      console.log("Arrays have same lengths.");
      // Here start comparing object properties
      // Object.keys
    } else {
      console.log("Arrays have different lengths.");
      return false;
    }
  } else if ((obj1 === obj2)) {
    console.log(`both are:->
  obj1: ${obj1} typeof: ${typeof(obj1)},
  obj2: ${obj2} typeof: ${typeof(obj2)}`);
    areEqual = true;
  }
  // Use the following return to default to false.
  // return (areEqual || false);
  return (areEqual);
}

let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual({here: 1, rest: {value: 1}, object: 2}, {here: 1, rest: {value: 1}, object: 2}));
// // -> false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
// console.log(deepEqual("hi", "hi"));
// // -> true



console.log(deepEqualTest(null, null));
console.log(deepEqualTest(false, false));
console.log(deepEqualTest("hi", "hi"));
console.log(deepEqualTest(1, 1));
console.log(deepEqualTest(obj, obj));
console.log(deepEqualTest(obj, {value: 1, rest: obj, str: "hello"}));