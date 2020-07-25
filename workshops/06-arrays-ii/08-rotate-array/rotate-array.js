function rotateArray(originalArray, rotateNum) {
  let front = originalArray.slice(-rotateNum);
  let end = originalArray.slice(0, -rotateNum);

  return front.concat(end);
}