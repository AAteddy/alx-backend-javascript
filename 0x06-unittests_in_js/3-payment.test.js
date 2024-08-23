const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM and the provided arguments', function() {
    // Create a spy for the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the correct arguments
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original function after the test
    calculateNumberSpy.restore();
  });
});
