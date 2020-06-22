// YOUR CODE BELOW

function onlyOdds(number) {
  
  // guard clause
  if (number < 1) {return 0;}
  
  let sum = 0;
  for (let i = 0; i <= number; i++){
  
    if (i%2 === 0){
      continue;
    }
    else {
      sum += i;
      i++;
      console.log("sum is " + sum);
    }
  }
  return sum;
}
