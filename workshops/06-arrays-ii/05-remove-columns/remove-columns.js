// YOUR CODE BELOW

// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.

// ```javascript
// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */
// ```

function removeColumns(originalGrid, numColums){

  let newGrid = [];

  for (let i = 0; i < originalGrid.length; i++){

    

    for (let j = 0; j < originalGrid[i].length; j++){
      let newColumns = [];
      //console.log(originalGrid[i][j])
      // remove rows from the end of the array
      for (let k = 0; k < numColums; k++){

        newColumns = originalGrid[i][j];
        newColumns.pop();
        console.log(newColumns)
      }

      console.log( newGrid)
      newGrid = newGrid.push(newColumns)

    }
  }
  

  return newGrid;
}