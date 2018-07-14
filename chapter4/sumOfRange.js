// Here is the testing function call
// Calling these functions should produce a result that 
// displays what each number added together will equal.
console.log(`Sum of a range: ${sum(range(1, 10))}`);


function range(start, end, step) {
  let arr = [];
  if (start < end) {
    for (let i = start; i <= end; i += step || 1) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= step || 1) {
      arr.push(i);
    }
  }

  
  return arr;
}

function sum(numArr) {
  let sumTotal = 0;
  for (let el of numArr) {
    sumTotal += el;
  }
  return sumTotal;
}


console.log(range(10, 1, 2));