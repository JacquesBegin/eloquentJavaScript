// Reverse a word

var reverse = function(word) {
  let newWord = "";
  for (let letter of word) {
    newWord = letter + newWord;
  }
  return newWord;
}

console.log(reverse("hello"));