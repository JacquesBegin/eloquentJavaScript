function deepEqualTest(obj1, obj2) {
  let areEqual = true;
  if ((typeof(obj1) === "object" && obj1 !== null)
      &&
      (typeof(obj2) === "object" && obj2 !== null)) {
    let keyArr1 = Object.keys(obj1);
    let keyArr2 = Object.keys(obj2);
    if (keyArr1.length == keyArr2.length) {
      for (let prop in obj1) {
        if (areEqual) {
          if (obj2[prop]) {
            areEqual = deepEqual(obj1[prop], obj2[prop]);
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } else if ((obj1 !== obj2)) {
    return false;
  } else {
  }
  return (areEqual);
}

function deepEqual(obj1, obj2, ) {
  let areEqual = true;
  if ((typeof(obj1) === "object" && obj1 !== null)
      &&
      (typeof(obj2) === "object" && obj2 !== null)) {
    let keyArr1 = Object.keys(obj1);
    let keyArr2 = Object.keys(obj2);
    console.log(`Value of both keyArr's-> keyArr1: ${keyArr1}, keyArr2: ${keyArr2}`);
    if (keyArr1.length == keyArr2.length) {
      console.log(`Arrays have equal lengths`);
      for (let prop in obj1) {
        if (areEqual) {
          console.log(`prop: ${prop}`);
          if (obj2[prop]) {
            console.log(`Prop found in both.`)
            areEqual = deepEqual(obj1[prop], obj2[prop]);
          } else {
            console.log("Properties are not equal.")
            return false;
          }
        } else {
          console.log("Returned from areEqual being false.")
          return false;
        }
      }
    } else {
      console.log("Arrays have different lengths.");
      return false;
    }
  } else if ((obj1 !== obj2)) {
    console.log(`different:->
  obj1: ${obj1} typeof: ${typeof(obj1)},
  obj2: ${obj2} typeof: ${typeof(obj2)}`);
    return false;
  } else {
    console.log(`same:->
  obj1: ${obj1} typeof: ${typeof(obj1)},
  obj2: ${obj2} typeof: ${typeof(obj2)}`);
  }
  
  return (areEqual);
}

// let obj = {here: {is: {here: {is: "an"}, object: 2}}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {stop: 1, object: 2}));
// // → false
// console.log(deepEqual({here: 1, rest: {value: 1}, object: 2}, {here: 1, object: 2}));
// // -> false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
// console.log(deepEqual("hi", "hi"));
// // -> true

let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 1}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 1}));
// // → true



console.log(deepEqualTest(null, null));
console.log(deepEqualTest(false, false));
console.log(deepEqualTest("hi", "hi"));
console.log(deepEqualTest(1, 1));
console.log(deepEqualTest(obj, obj));
console.log(deepEqualTest(obj, {value: 1, rest: obj, str: "hello"}));
console.log(deepEqualTest(obj, {value: 1, rest: obj}));
console.log(deepEqualTest(obj, {here: 1, object: 2}));
console.log(deepEqualTest(obj, {here: {is: "an"}, object: 1}));