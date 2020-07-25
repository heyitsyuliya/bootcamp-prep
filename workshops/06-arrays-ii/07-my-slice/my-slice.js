function mySlice(originalArray, startIdx, endIdx){
  
  let slicedArray = [];

  if (endIdx === undefined){
    endIdx = originalArray.length;
  }

  else if (endIdx < 0){
    endIdx = originalArray.length + endIdx;
  }

  if (startIdx === undefined){
    for (let j = 0; j < originalArray.length; j++){
      slicedArray.push(originalArray[j]);
    }
  }

  else if (startIdx < 0){
    startIdx = originalArray.length + startIdx;
  }

  
  for (let i = startIdx; i < endIdx; i++){
    let arrayEl = originalArray[i];
    slicedArray.push(arrayEl);
  }

  return slicedArray;
}