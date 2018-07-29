class Rabbit {
  constructor(type) {
    this.type = type;
    this.superPower = null;
  }
  speak(line) {
    console.log(`${this.type} rabbit says: ${line}`);
  }
  getSuperPower() {
    return (this.superPower || "none");
  }
  setSuperPower(power) {
    this.superPower = power;
  }
  clearSuperPower() {
    this.superPower = null;
  }
}

let superP = Symbol("superPo");
let superP2 = Symbol("superPo");
console.log(superP);


Rabbit.prototype[superP] = function() {
  console.log(`The ${this.type} rabbit's superpower is: ${this.superPower}`);
}
Rabbit.prototype[superP2] = function() {
  console.log(`The ${this.type} rabbit's super P power is: ${this.superPower}`);
}

let ninjaRabbit = new Rabbit("ninja");
ninjaRabbit.setSuperPower("ghost walker");
ninjaRabbit[superP2]();
let sym = Symbol("test");
ninjaRabbit[sym] = "Symbol Test";

ninjaRabbit.sym = "Symbol Test 2";
console.log(Object.getOwnPropertySymbols(ninjaRabbit));
console.log(ninjaRabbit.sym);

levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn'),
};
console.log(levels.DEBUG, 'debug message');
console.log(levels.INFO, 'info message');
