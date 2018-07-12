function countBs(word, letter = "b") {
  let letterCount = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(countBs("belowbbb", "m"));