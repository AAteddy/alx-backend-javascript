const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
  const url = 'http://localhost:7865/';

  it('should return status code 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();  // Call done to signal Mocha that the test is complete
    });
  });

  it('should return the correct message', function(done) {
    request(url, function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();  // Call done to signal Mocha that the test is complete
    });
  });

  it('should return the correct content type', function(done) {
    request(url, function(error, response, body) {
      expect(response.headers['content-type']).to.contain('text/html');
      done();  // Call done to signal Mocha that the test is complete
    });
  });
});
