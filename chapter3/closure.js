
// Simple closure that provides access to the local binding 
// of a function. In this example it is demonstrated that 
// parameters passed to functions are automatically locally 
// binded through the parameter itself. (Setting a parameter
// to another local binding is unnecessary to bind it to that
// function).

function closure(n) {
  let obj = {
    one: 1 * n,
    two: 2 * n,
    three: function() {
      return n * n;
    }
  }
  return () => obj;
}

let closure1 = closure(2);

console.log(closure1().one);