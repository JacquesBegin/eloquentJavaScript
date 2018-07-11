countAnimals = (numCows, numChickens) => {
  console.log(countAnimal(numCows) + " Cows");
  console.log(countAnimal(numChickens) + " Chickens");
}

countAnimal = (count) => {
  if (count < 10) {
    return "00" + count;
  } else if (count < 100) {
    return "0" + count;
  } else {
    return count;
  }
}

countAnimals(3, 17);