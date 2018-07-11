fizzBuzz = () => {
  let count = 1;
  while (count <= 100) {
    let word = "";
    if (count % 3 == 0) {
      word += "Fizz";
    }
    if (count % 5 == 0) {
      word += "Buzz";
    }
    console.log(word || count);
    count++;

    // if (count % 3 == 0 && count % 5 == 0) {
    //   console.log("FizzBuzz");
    // } else if (count % 3 == 0) {
    //   console.log("Fizz");
    // } else if (count % 5 == 0) {
    //   console.log("Buzz");
    // } else {
    //   console.log(count);
    // }
    // count++;
  }
}

fizzBuzz();