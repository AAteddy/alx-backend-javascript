const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
  const url = 'http://localhost:7865/';

  it('should return status code 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function(done) {
    request(url, function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return status code 200 when :id is a number', function(done) {
    request(`${baseUrl}12`, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when :id is a number', function(done) {
    request(`${baseUrl}12`, function(error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is NOT a number', function(done) {
    request(`${baseUrl}hello`, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments', function() {
  const url = 'http://localhost:7865/available_payments';

  it('should return status code 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods', function(done) {
    request(url, function(error, response, body) {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login', function() {
  const url = 'http://localhost:7865/login';

  it('should return status code 200 and correct message', function(done) {
    request.post({
      url: url,
      json: { userName: 'Betty' }
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
