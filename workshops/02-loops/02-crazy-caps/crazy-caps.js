// YOUR CODE BELOW
/* 
Define a function, `crazyCaps`, that accepts a string as an argument.
`crazyCaps` should return a string in which every other character is
capitalized. The first letter should be lower-cased.

```javascript
crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
```
*/

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