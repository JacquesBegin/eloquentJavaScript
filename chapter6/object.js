let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says "${line}"`);
}

rabbit.speak("I'm hopping along");

function speak(line) {
  console.log(`The ${this.type} rabbit says "${line}"`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("I'm white");
hungryRabbit.speak("I'm hungry");

speak.call(whiteRabbit, "I dye my fur");