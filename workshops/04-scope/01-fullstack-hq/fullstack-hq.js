// Edit the code below

// Refactor the function `fullstackHQ` so that it returns the correct string:

// ```javascript
// fullstackHQ();
// // => Fullstack HQ is at Planet Earth, United States, New York State, New York City
// ```

// The only things you should change are the parameter and/or variable names.


let planet = 'Planet Earth';

function fullstackHQ(){
  return middleFunction('United States');

  function middleFunction(country) {
    return innerFunction('New York State');

    function innerFunction(state) {
      city = 'New York City';
      return innermostFunction();

      function innermostFunction() {
        return 'Fullstack HQ is at ' + planet + ', ' + country + ', ' + state + ', ' + city;
      }
    }
  }
}
