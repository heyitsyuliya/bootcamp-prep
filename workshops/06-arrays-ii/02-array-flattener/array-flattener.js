// YOUR CODE BELOW

// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an
// argument.

// `arrayFlattener` should return a new, one-dimensional array.

// ```javascript
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
// ```

function arrayFlattener(array){
  let flattenedArr = [];

  for (let i = 0; i < array.length; i++){
    if (typeof array[i] === 'object'){
      for (let j = 0; j < array[i].length; j++){
        flattenedArr.push(array[i][j]);
      }
    }
    else {
      flattenedArr.push(array[i]);
    }
  }

  return flattenedArr;
}