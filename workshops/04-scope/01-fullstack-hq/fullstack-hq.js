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
