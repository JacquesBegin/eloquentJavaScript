let obj = {
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

// This creates a second reference to the value of obj.
// let newObj = obj;

// This creates an actual copy of the obj data.
// let newObj = JSON.parse(JSON.stringify(obj));

// This creates an actual copy of the obj data.
function copyObject(originalObj) {
  var copiedObj = {};
  for (var key in originalObj) {
    if (originalObj[key] !== null && typeof(originalObj[key]) === "object") {
      copiedObj[key] = copyObject(originalObj[key]);
    } else {
      copiedObj[key] = originalObj[key];
    }
  }
  return copiedObj;
}

let newObj = copyObject(obj);


newObj.value = 6;


console.log("obj: ", obj);
console.log("newObj: ", newObj);
