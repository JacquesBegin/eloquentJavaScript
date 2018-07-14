let arr = [1, 2, 3, 4];

for (let e in arr) { console.log(arr[e]) }
console.log("push: ", arr.push(5));
console.log(arr);
console.log("shift: ", arr.shift());
console.log(arr);
console.log("unshift: ", arr.unshift(5));
console.log(arr);
console.log("pop: ", arr.pop());
console.log(arr);
console.log("indexOf: ", arr.indexOf(2, 3));
console.log("lastIndexOf: ", [1, 2, 3, 4, 2, 7].lastIndexOf(2));
console.log("slice and concat: ", arr.slice(0, 1).concat(arr.slice(3)).concat(arr.slice()));
console.log("slice without parameters to copy an array: ", [1, 2, 3, 4, 2, 7].slice());