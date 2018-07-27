let empty = {};

console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

killerRabbit.speak = function (line) {
  console.log(`The ${this.type} rabbit says 'I'm a nice bunny.....really....${line}'`);
}

killerRabbit.speak("AHHHH!");
let brownRabbit = Object.create(protoRabbit);
brownRabbit.type = "brown";
brownRabbit.speak("...nibble...");
