const Utils = {
  calculateNumber: function (type, a, b) {
    const A = Math.round(a);
    const B = Math.round(b);

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
};

module.exports = Utils;
