function removeColumns(originalGrid, numColums){
  let newGrid = [];

  for (let i = 0; i < originalGrid.length; i++){

    newGrid.push(originalGrid[i].slice(0, originalGrid[i].length - numColums));
  }

  return newGrid;
}