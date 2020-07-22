function crazyCaps (string){
  
  let newString = '';
  
  for (let i = 0; i < string.length; i++){
    
    if (i %2 === 1){
      newString += string[i].toUpperCase();
    }
    else {
      newString += string[i];
      continue;
    }
  }

  return newString;
}