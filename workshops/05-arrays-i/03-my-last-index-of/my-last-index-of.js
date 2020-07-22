function myLastIndexOf(array, searchValue, startIdx = 0){
  
  if (array.indexOf(searchValue) != true){ return -1; }

  if (array.indexOf(searchValue) || startIdx) {
    
    let returnValue = -1;

    for (let i = startIdx; i < array.length; i++){
      if (array[i] === searchValue){
        returnValue = i;
      }

      else {
        let newArray = array.slice(0, startIdx + 1);
        for (let j = newArray.length -1; j >= 0; j--){
          if (newArray[j] === searchValue){
            returnValue = j;
          }
        }
      }
    }

    return returnValue;
  }
}