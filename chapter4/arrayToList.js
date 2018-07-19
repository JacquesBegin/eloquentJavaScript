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
function nthRecursive(list, index) {
  let foundElement;
  if (index < 0 || list === null) {
  } else if (index == 0) {
    foundElement = list.value;
  } else {
    foundElement = nthRecursive(list.rest, --index);
  }
  return foundElement;
}

// Return element at given position in list using index
function nthLoop(list, index) {
  let count = index;
  let tempObj = copyObject(list);
  let foundElement;
  while (count >= 0 && tempObj !== null ) {
    if (count == 0) {
      foundElement = tempObj.value;
    } else {
      tempObj = tempObj.rest;
    }
    count--;
  }
  return foundElement;
}

// Find nth position using a for loop to check if the 
// value of the node variable is null.
function nthNodeLoop(list, num) {
  let count = 0;
  let elementFound;
  for (let node = list; node; node = node.rest) {
    if (count == num) {
      elementFound = node.value;
    }
    count++;
  }
  return elementFound;
}

console.log("nthRecursive: ", nthRecursive(testObj, 4));
console.log("nthLoop: ", nthLoop(testObj, 4));
console.log("nthNodeLoop: ", nthNodeLoop(testObj, 5));


// Convert a list to an array using a for loop to check for
// a null value in the rest property.
function listToArrayLoop(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

console.log("listToArrayLoop: ", listToArrayLoop(testObj));