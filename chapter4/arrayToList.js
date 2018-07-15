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
  let obj = {};
  let arrLastIndex = arr.length - 1;
  for (arrLastIndex; arrLastIndex >= 0; arrLastIndex--) {
    console.log(arrLastIndex);
    // obj = makeObject(obj, arr[arrLastIndex]);
    obj = {value: arr[arrLastIndex], rest: obj}
  }

  return obj;
}

console.log(arrayToList([1, 2, 3, 4]));