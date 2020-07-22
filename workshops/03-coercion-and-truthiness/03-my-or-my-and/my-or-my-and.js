function myOr(value1, value2, value3) {

  if (!!value1) {return value1;}

  if (!!value2) {return value2;}

  if (!!value3) {return value3;}

  return value3;
}

function myAnd(value1, value2, value3) {

  if (!value1) {return value1;}

  if (!value2) {return value2;}

  if (!value3) {return value3;}

  return value3;
}