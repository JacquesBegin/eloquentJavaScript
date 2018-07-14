sliceWordAddLetter = (letter, word) => {
  return (word[0] + letter).concat(word.slice(2));
}

console.log(sliceWordAddLetter("j", "happy"));