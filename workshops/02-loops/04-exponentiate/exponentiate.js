function exponentiate(base, power){
  if (power === 0){
    return 1;
  }

  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= base;
  }

  return result;
}