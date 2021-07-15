function clamp(xx, fromX, toX) {
  let x = xx;
  if (x < fromX) {
    x = fromX;
  }
  if (x > toX) {
    x = toX;
  }

  return x;
}

export default clamp;
