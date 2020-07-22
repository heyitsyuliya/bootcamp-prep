function mySlice(originalString, startIdx, endIdx){
  
  if (startIdx === undefined){
    return originalString;
  }

  if (endIdx === undefined){
    endIdx = originalString.length;
  }

  let newString = '';

  for (let i = startIdx; i < endIdx; i++){
    let characters = originalString[i];
    newString += characters;
  }

  return newString;
}