let arr = ["dog", "cat", "bird"];

function reverseArray(arr) {
  let newArr = [];
  arr.forEach((el) => { newArr.unshift(el) });
  return newArr;
}

reverseArrayInPlace = (arr) => {
  let temp;
  for (let i of arr) {

  }
}


console.log(reverseArray(arr));
console.log(arr);
// console.log(newArr);