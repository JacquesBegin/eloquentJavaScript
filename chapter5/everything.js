function everyLoop(arr, test) {
  let arrLength = arr.length, found = true, count = 0;
  while (count < arrLength && found) {
    if (!test(arr[count])) {
      found = false;
    }
    count++;
  }
  return found;
}


function everySome(arr, test) {
  let found = arr.some(test)
  // return (!found);
  return null;
}


let arr = [2, 4, 6, 8, 10];
testFunc = (element) => {
  return element % 2 === 0;
}

console.log("everyLoop: ", everyLoop(arr, testFunc));
console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true
console.log("everySome: ", everySome(arr, testFunc));