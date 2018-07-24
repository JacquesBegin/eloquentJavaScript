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

function everyForLoop(arr, test) {
  for (let i = 0; i < arr.length; i++) {
    if (!test(arr[i])) {
      return false;
    }
  }
  return true;
}


function everySome(arr, test) {
  return (!arr.some((n) => {!test(n)}));
}


let arr = [2, 4, 6, 8, 10];
testFunc = (element) => {
  return element % 2 === 0;
}

console.log("everyLoop: ", everyForLoop(arr, testFunc));
console.log(everyForLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyForLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyForLoop([], n => n < 10));
// → true
console.log("everySome: ", everySome(arr, testFunc));


function deMorgansLaw(a, b) {
  console.log(`a && b: ${a && b}`);
  console.log(`!(!a || !b): ${!(!a || !b)}`);
}

// console.log(`deMorgansLaw: ${deMorgansLaw(true, true)}`);
// console.log(`deMorgansLaw: ${deMorgansLaw(true, false)}`);
// console.log(`deMorgansLaw: ${deMorgansLaw(false, true)}`);
// console.log(`deMorgansLaw: ${deMorgansLaw(false, false)}`);
