// YOUR CODE BELOW

// Define a function, `myLastIndexOf`, that accepts up to three arguments:
//   1. array
//   2. searchValue
//   3. startIdx (optional)

// `myLastIndexOf` should return the last index at which the searchValue appears in
// the array.

// ```javascript
// myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// ```

// If the searchValue isn't in the array, `myLastIndexOf` should return -1.

// ```javascript
// myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// ```

// If startIdx is defined, `myLastIndexOf` should start looking for the seachValue
// at that index, and then move toward the front of the array as it looks for the
// value.

// ```javascript
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0
// ```

// You cannot use the built-in [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) for this problem, but feel free
// to use it in the future! Note that strings also have a [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf).

function myLastIndexOf(array, searchValue, startIdx = 0){
  
  
  // guard clause
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