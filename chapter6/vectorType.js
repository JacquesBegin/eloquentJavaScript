class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return (Math.sqrt(this.x * this.x + this.y * this.y));
  }

  plus(nX, nY) {
    console.log("plus");
    return new Vec(this.x + nX, this.y + nY);
  }

  minus(nX, nY) {
    console.log("minus");
    return new Vec(this.x - nX, this.y - nY);
  }

}

let vec = new Vec(2, 3);
console.log(vec.plus(3, 2));
console.log(vec.minus(3, 2));
console.log(vec.length);