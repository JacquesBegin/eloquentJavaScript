countAnimals = (numCows, numChickens) => {
  console.log(zeroPad(numCows) + " Cows");
  console.log(zeroPad(numChickens) + " Chickens");
}

zeroPad = (count) => {
  let str = String(count);
  while (str.length < 3) {
    str = "0" + str;
  }
  return str;

  // let str = (typeof count === "string") ? count : String(count);
  // console.log(str);
  // if (str.length < 3) {
  //   countAnimal(str = "0" + str);
  // } else {
  //   return str;
  // }
  // return str;

  // if (count < 10) {
  //   return "00" + count;
  // } else if (count < 100) {
  //   return "0" + count;
  // } else {
  //   return count;
  // }
}

countAnimals(3, 17);