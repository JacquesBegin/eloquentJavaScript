function reduce(arr, combine, start) {
  let current = start;
  for (let element of arr) {
    current = combine(current, element);
  }
  return current;
}

let toReduce = [
  [[1, 5], [7, 11], [58, 75]],
  [[5, 7], [11, 58], [75, 100]]
];

console.log(reduce(toReduce, (a, b) => {
  return a + b;
}, 0));