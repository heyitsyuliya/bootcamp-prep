function mostVowels(sentence){
  
  let currentWord = '';
  let currVowelCount = 0;

  let maxWord = '';
  let maxVowelCount = 0;

  for (let i = 0; i < sentence.length; i++){
    let character = sentence[i];

    if (character !== ' ' && i !== sentence.length -1){
      currentWord += character;

      if(isVowel(character)){
        currVowelCount += 1;
      }
    }

    else {
      if (currVowelCount > maxVowelCount){
        maxVowelCount = currVowelCount;
        maxWord = currentWord;
      }

      currentWord = '';
      currVowelCount = 0;
    }
  }

  return maxWord;

  function isVowel(character){
    let vowels = 'aeiouAEIOU';
  
    if (vowels.indexOf(character) >= 0){
      return true;
    } else {
      return false;
    }
  }
}