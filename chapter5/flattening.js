let arrs = [[1, 2, 3], [4, 5], [6]];

function flatten(arrOfArrs) {
  return arrOfArrs.reduce((a, c) => {
    return a.concat(c);
  }, []);
}

console.log(flatten(arrs));