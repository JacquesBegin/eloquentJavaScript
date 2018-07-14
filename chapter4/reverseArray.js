let arr = ["dog", "cat", "bird", "pig", "cow", "chicken", "rat"];

function reverseArray(arr) {
  let newArr = [];
  arr.forEach((el) => { newArr.unshift(el) });
  return newArr;
}


// Reverse the order of an array without creating a new array
reverseArrayInPlace = (arr) => {
  let temp;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }
  return arr;
}


console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));
// console.log(newArr);