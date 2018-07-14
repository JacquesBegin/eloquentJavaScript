function rest(multiplier, ...nums) {
  for (let num of nums) {
    console.log(num.name);
  }
}

// rest(2, 4, 3, 2, 7, 5);
rest(2, {name: "Jacques", age: 38}, {name: "Jill", age: 36})

// let arr = [7, 3, 2, 4, 1];

// rest(2, ...arr);

let arr1 = [1, 3, 5, 7];

function printArr(...nums) {
  nums.forEach(element => {
    console.log(element);
  });
}

printArr(...arr1);


function max(...nums) {
  let result = -Infinity;
  nums.forEach(element => {
    if (element > result) { result = element }
  });
  return result;
}

let arrNums = [3, 4, 27, 1];

console.log(max(1, 21, 3, 4, 5));
console.log(max(3, ...arrNums, 20));