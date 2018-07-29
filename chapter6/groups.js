class Group {
  constructor() {
    this.group = [];
  }
  static from(arg) {
    let fromGroup = new Group();
    for (let item of arg) {
      fromGroup.add(item);
    }
    return fromGroup;
  }

  add(newValue) {
    if (this.group.indexOf(newValue) === -1) {
      this.group.push(newValue);
    }
  }

  delete(badValue) {
    let ind = this.group.indexOf(badValue);
    if (ind > -1) {
      this.group.splice(ind, 1);
    }
  }

  has(ifValue) {
    return this.group.indexOf(ifValue) > -1 ? true : false;
  }
}

let newGroup = new Group();

newGroup.add("hi");
newGroup.add(10);
newGroup.add([1, 2, 3, 4, 5]);

console.log(newGroup.group);

newGroup.delete("hi");

console.log(newGroup.group);

console.log(newGroup.has(111));
console.log(newGroup.has(10));

let newFromGroup = Group.from([1, "bye", {kiss: "positive"}]);

console.log(newFromGroup);

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false