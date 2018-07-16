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
// var newObj = obj;

// This creates an actual copy of the obj data.
// var newObj = JSON.parse(JSON.stringify(obj));

// This creates an actual copy of the obj data.
function copyObject(originalObj) {
  var copiedObj = {};
  for (let key in originalObj) {
    console.log("originalObj[key]", originalObj[key]);
    if (originalObj[key] !== null && typeof(originalObj[key] === "object")) {
      copiedObj[key] = copyObject(originalObj[key]);
    } else {
      console.log("originalObj[key]: ", originalObj[key])
      copiedObj[key] = originalObj[key];
    }
  }
  return copiedObj;
}

let newObj = copyObject(obj);


// newObj.value = 6;


console.log("obj: ", obj);
console.log("newObj: ", newObj);
