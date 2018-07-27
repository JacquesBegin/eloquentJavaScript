let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says "${line}"`);
  } 
}

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

let smallRabbit = makeRabbit("small");
smallRabbit.speak("I'm small");


function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("I'm weird");

