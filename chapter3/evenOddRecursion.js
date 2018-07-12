isEven = (num) => {
  let e;
  if (num < 0) {
    return isEven(num + 2);
  } else {
    if (num == 0) {
      e = true;
    } else if (num == 1) {
      e = false;
    } else {
      return isEven(num - 2);
    }
    return e;
  }
}

console.log(isEven(-10));