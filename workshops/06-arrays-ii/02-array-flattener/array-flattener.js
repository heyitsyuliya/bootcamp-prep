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