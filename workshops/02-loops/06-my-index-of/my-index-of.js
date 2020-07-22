function myIndexOf(source, searchValue, startIdx){

  if (startIdx === undefined){
    startIdx = 0;
  }

  for (let i = startIdx; i <= source.length - searchValue.length; i++){
    
    let foundString = source.slice(i, i +searchValue.length);

    if (foundString === searchValue){
      return i;
    }
  }

  return -1;
}