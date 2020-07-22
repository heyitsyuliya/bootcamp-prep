function oddCouple(someArray){
  let newArray = [];

  for (let i = 0; i < someArray.length; i++){
    
    if (someArray[i] %2 == 1 && newArray.length < 2){
      newArray.push(someArray[i]);
    }
  }
  return newArray;
}