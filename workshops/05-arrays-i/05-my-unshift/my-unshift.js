function myUnshift(array, val){
  let newArray = [];
  
  newArray.push(val);
  
  for (let i = 0; i < array.length; i++){
    newArray.push(array[i]);
  }

  return newArray;
}