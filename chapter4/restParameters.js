function rest(multiplier, ...nums) {
  for (let num of nums) {
    console.log(num.name);
  }
}

// rest(2, 4, 3, 2, 7, 5);
rest(2, {name: "Jacques", age: 38}, {name: "Jill", age: 36})

// let arr = [7, 3, 2, 4, 1];

// rest(2, ...arr);