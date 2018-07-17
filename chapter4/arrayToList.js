let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

// Convert an array to a list (Object)
function arrayToList(arr) {
  let obj = null;
  let arrLastIndex = arr.length - 1;
  for (arrLastIndex; arrLastIndex >= 0; arrLastIndex--) {
    obj = {value: arr[arrLastIndex], rest: obj}
  }
  return obj;
}
console.log(arrayToList([1, 2, 3]));

// Convert a list (Object) to an array.

let testObj = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 4,
        rest: {
          value: 5,
          rest: null
        }
      }
    }
  }
}

function listToArray(testObj) {
  let tempObj = Object.create(testObj);
  let arr = [];
  let restNotNull = true;

  do {
    if (tempObj !== null) {
      arr.push(tempObj.value);
      tempObj = tempObj.rest;
    } else {
      restNotNull = false;
    }
  } while (restNotNull);
  return arr;
}
console.log(listToArray(arrayToList([1, 2, 3])));


// Creates a new object from existing object.
// The original object is not altered.
function copyObject(obj) {
  let newObj = {};
  for (let el in obj) {
    if (obj[el] !== null && typeof(obj[el]) === "object") {
      newObj[el] = copyObject(obj[el]);
    } else {
      newObj[el] = obj[el];
    }
  }
  return newObj;
}

// Add a new value to the top of a list.
function prepend(dataToAdd, obj) {
  return ({
    value: dataToAdd,
    rest: copyObject(obj)
  });
}

console.log("prepend: ", prepend(111, testObj));


// Return element at given position in list using index
function nth(list, index) {
  let foundElement;
  if (index < 0 || list === null) {
  } else if (index == 0) {
    foundElement = list.value;
  } else {
    foundElement = nth(list.rest, --index);
  }
  return foundElement;
}

console.log("nth: ", nth(testObj, 4));