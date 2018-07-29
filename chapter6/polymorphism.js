class Rabbit {
  constructor(type) {
    this.type = type;
    this.jumping = 1;
  }

  get rabbit() {
    return this.type;
  }

  set jump(jump) {
    this.jump = jump;
  }

  speak(line) {
    console.log(`${this.type} rabbit says: ${line}`);
  }
}

Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};

let blackRabbit = new Rabbit("black");
let blueRabbit = new Rabbit("blue");
console.log(blackRabbit.toString());
blueRabbit.speak.call(blackRabbit, "I'm a black rabbit.");
console.log(blueRabbit.toString());
console.log(blueRabbit.rabbit);

blueRabbit.jumping = 4;
console.log(blueRabbit);