const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./4-payment'); // Import the function to be tested

describe('sendPaymentRequestToApi', function() {
  it('should stub Utils.calculateNumber and spy on console.log', function() {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original functions after the test
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
