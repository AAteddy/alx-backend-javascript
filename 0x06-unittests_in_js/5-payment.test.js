const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  // Hook to run before each test
  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  // Hook to run after each test
  afterEach(function() {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and be called once when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    
    // Assertions
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log "The total is: 20" and be called once when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    
    // Assertions
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
