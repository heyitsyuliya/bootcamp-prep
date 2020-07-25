function zooInventory(array){

  let animalList = [];
  let animalAge = '';

  for (let i = 0; i < array.length; i ++){
    let animal = [];

    for (let j = 0; j < array[i].length; j++){

      if (typeof array[i][j] === 'object'){
        animalAge = array[i][j].join(' is ');
        animal.push(animalAge);
      }
      else {
        animal.push(array[i][j].toString() + ' the');
      }
    }
    animalList.push(animal.join(' ') + '.');
  }
 
  return animalList;
}