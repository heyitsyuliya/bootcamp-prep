function zeroDarkThirty(originalValue) {
  if (originalValue === 0) {
    return NaN
  }

  originalValue = String(originalValue);

  let newValue = '';

  for (let i = 0; i < originalValue.length; i++) {

    let currentChar = originalValue[i];

    if (currentChar !== '0') {
      newValue += currentChar;
    }
  }

  return Number(newValue);
}