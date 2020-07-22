function isTruthy(arg){
  if (!!arg) {
    return true;
  }

  if (arg === false) {
    return 'The boolean value false is falsey';
  }

  if (arg === null) {
    return 'The null value is falsey';
  }

  if (arg === 0) {
    return 'The number 0 is falsey (the only falsey number)';
  }

  if (arg === '') {
    return 'The empty string is falsey (the only falsey string)';
  }

  return 'undefined is falsey';
}