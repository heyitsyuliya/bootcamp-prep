function myReverse(array){

  let reversedArray = [];

  for (let i = array.length -1 ; i >= 0; i--){
    reversedArray.push(array[i]);
  }

  return reversedArray;
}