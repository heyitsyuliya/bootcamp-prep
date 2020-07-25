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