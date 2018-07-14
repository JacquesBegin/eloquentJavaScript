
// Destructure an array
function dogProperties(dog) {

  var printDog = ([name, age, weight]) => {
    console.log('Name: '.concat(name));
    console.log("Age: " + age);
    console.log(`Weight: ${weight}`);
    return function() {
      return {name, age, weight};
    };
  }
  return printDog([dog[0], dog[1], dog[2]]);

}
let dog = ["Rover", 3, 55];
console.log(dogProperties(dog)().age);



// Destructure a string
destructureString = (letter, [p1, p2, p3, ...pN]) => {
  console.log(`${letter} p1 ${p1}, p2 ${p2}, p3 ${p3}, pN ${ pN[2] || letter }`)
}
destructureString("z", "hello");


// Destructuring example
resting = ([num1, num2, num3, num4]) => {
  return (num1 * num2)/(num3 * num4);
}
let nums = [3, 5, 7, 9];
console.log(resting(nums));


// Destructuring with object
let {age} = {name: "Jacques", age: [38]};

console.log(typeof age);

console.log(age.includes(38));

destruct = ([gold, silver, copper], ...gems) => {
  console.log(`Gold: ${gold}\nSilver: ${silver}\nCopper: ${copper}`);
  console.log(function() {
    for (let i of gems) {
      console.log(i);
    }
    return "Finished assessing money."

  }());
}

var arrMoney = [78, 64, 97];
destruct(arrMoney, "ruby", "diamond", "sapphire");
