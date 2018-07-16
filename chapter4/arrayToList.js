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


