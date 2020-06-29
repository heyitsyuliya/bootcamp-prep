// YOUR CODE BELOW

// Define a function, `zooInventory`, that accepts a multi-dimensional array of
// animal facts.

// `zooInventory` should return a new, flat array. Each element in the new array
// should be a sentence about each of the animals in the zoo.

// ```javascript
// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// zooInventory(myZoo);
// /* => ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']
// */
// ```

function zooInventory(array){

  // this will be array of strings
  let animalList = [];
  let animalAge = '';

  for (let i = 0; i < array.length; i ++){
    // working with an entire array
    let animal = [];

    for (let j = 0; j < array[i].length; j++){
      //working with array elements
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