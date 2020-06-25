// YOUR CODE BELOW

// Define a function, `myOr`, that accepts three arguments of any type.

// `myOr` should return the same result as the buit-in `||` operator:

// ```javascript
// myOr(true, true, false) === (true || true || false); // => true
// ```

// Then, define a function, `myAnd`, that accepts three arguments of any type.

// `myAnd` should return the same result as the buit-in `&&` operator:

// ```javascript
// myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
// ```

function myOr(value1, value2, value3) {

  if (!!value1) {return value1;}

  if (!!value2) {return value2;}

  if (!!value3) {return value3;}

  return value3;
}

function myAnd(value1, value2, value3) {

  if (!value1) {return value1;}

  if (!value2) {return value2;}

  if (!value3) {return value3;}

  return value3;
}