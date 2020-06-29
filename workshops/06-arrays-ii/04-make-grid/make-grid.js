// YOUR CODE BELOW

// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// ```javascript
// makeGrid(3,4);
// /* => [[1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3]]
// */
// ```

function makeGrid(numColumns, numRows){

  let grid = [];

  for (let i = 0; i < numRows; i ++){
    
    let columns = [];

    for (let j = 0; j < numColumns; j++){
      columns.push(j + 1);
    }

    grid.push(columns);
  }

  return grid;
}