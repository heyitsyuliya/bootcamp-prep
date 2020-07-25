function myJoin (words, separator){
  
  if (separator === undefined){
    separator = ',';
  }

  let sentence = '';

  for (let i = 0; i < words.length; i++){

    let word = words[i];

    if (i !== 0){
      sentence += separator;
    }

    if (word !== undefined && word !== null){
      sentence += word;
    }
  }

  return sentence;
}
