function bacteriaTime(currentNum, targetNum){

  let minutes = 0;

  if (targetNum < currentNum){ return 'targetNum must be larger than currentNum' }

  while (currentNum < targetNum) {
    currentNum *= 2;
    minutes += 20;
  }

  return minutes;
}