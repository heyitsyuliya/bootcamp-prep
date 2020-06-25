// YOUR CODE BELOW

// Write a function `isTruthy` that accepts a single argument of any type.

// `isTruthy` should return true if that argument is 'truthy'.

// If the value is 'falsey', log out one of the messages below, corresponding to
// the type of the value tested.

// ```
// 'The boolean value false is falsey'
// 'The null value is falsey'
// 'undefined is falsey'
// 'The number 0 is falsey (the only falsey number)'
// 'The empty string is falsey (the only falsey string)'
// ```

// ```javascript
// isTruthy('I yearn for truth'); // => true
// isTruthy(null); // => The null value is falsey
// ```

function isTruthy(arg){
  if (!!arg) {
    return true;
  }

  if (arg === false) {
    return 'The boolean value false is falsey';
  }

  if (arg === null) {
    return 'The null value is falsey';
  }

  if (arg === 0) {
    return 'The number 0 is falsey (the only falsey number)';
  }

  if (arg === '') {
    return 'The empty string is falsey (the only falsey string)';
  }

  return 'undefined is falsey';
}