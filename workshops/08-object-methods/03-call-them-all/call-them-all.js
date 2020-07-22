// YOUR CODE BELOW

// Write a function `callThemAll`, that, given an object and a value, calls every
// method in the object, passing in the value as the argument with each call.

// `callThemAll` should return an array with all of the returned values from each
// method invocation. The order of the elements in the returned array does not
// matter.

// ```javascript
// let addsNums = {
//   addTen: function(num) {
//     return num + 10;
//   },

//   addTwenty: function(num) {
//     return num + 20;
//   },

//   someProperty: 'value'
// };

// callThemAll(addNums, 100); // => [110, 120]
// ```

function callThemAll(object, value){
  let result = [];

  for(let key in object){
    if (typeof object[key] === 'function'){
      result.push(object[key](value));
    }
  }

  return result;
}