// If you set a parameter to "equal" a value, this is called 
// assigning a default value. If the parameter value is 
// "undefined" then the value on the right side of the 
// "=" will be used, else the parameter value passed in
// will be used.

function addOptional(arg1, arg2 = 2) {
  console.log(arg1 + arg2);
}

addOptional(1);