// YOUR CODE BELOW

// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.

// ```javascript
// onlyOne(false, false, true); // => true
// onlyOne(0, 1, 2) // => false
// ```

function onlyOne(value1, value2, value3) {

  // if only the first value is truthy, return true
  if (!!value1 && !value2 && !value3) {
    return true;
  }

  // if only the second value is truthy, return truy
  if (!value1 && !!value2 && !value3) {
    return true;
  }

  // if only the third value is truthy, return true
  if (!value1 && !value2 && !!value3) {
    return true;
  }

  // in any other case, return false
  return false;
}

/*
  this alternative solution combines the three if statements into one. this also
  works and is DRYer than the first solution. but it is arguably a little harder
  to read!
*/

function onlyOne2(value1, value2, value3) {
  if (
      (!!value1 && !value2 && !value3) ||
      (!value1 && !!value2 && !value3) ||
      (!value1 && !value2 && !!value3)
  ) {
    return true;
  }

  return false;
}