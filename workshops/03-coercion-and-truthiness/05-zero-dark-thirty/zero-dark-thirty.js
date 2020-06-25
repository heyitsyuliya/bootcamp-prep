// YOUR CODE BELOW

// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// `mySlice` should return a number with all of the zeroes removed:

// ```javascript
// removeZero(102302) // => 1232
// removeZero(606.203) // => 66.23
// ```

// If the number 0 is passed in as the argument, return [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// ```javascript
// removeZero(0) // => NaN
// ```

function zeroDarkThirty(originalValue) {
  if (originalValue === 0) {
    return NaN
  }

  // explicitly coerce the originalValue to a string
  originalValue = String(originalValue);

  // create a new value
  let newValue = '';

  // loop through the originalValue
  for (let i = 0; i < originalValue.length; i++) {

    // store the current character from the string in a variable
    let currentChar = originalValue[i];

    // as long as the char isn't a zero, concat it onto the newValue string
    if (currentChar !== '0') {
      newValue += currentChar;
    }
  }

  // explicitly coerce the newValue to a number as it's returned
  return Number(newValue);
}