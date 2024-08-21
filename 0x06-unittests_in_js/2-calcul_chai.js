function calculateNumber(type, a, b) {
  // Round both numbers
  const A = Math.round(a);
  const B = Math.round(b);

  // Perform the operation based on the type
  if (type === 'SUM') {
    return A + B;
  } else if (type === 'SUBTRACT') {
    return A - B;
  } else if (type === 'DIVIDE') {
    if (B === 0) {
      return 'Error';
    } else {
      return A / B;
    }
  } else {
    throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
