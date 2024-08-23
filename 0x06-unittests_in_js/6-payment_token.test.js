const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assertion to check if the response is as expected
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the test is done
      })
      .catch((error) => {
        done(error); // Pass any errors to done to fail the test
      });
  });

  it('should not return anything when success is false', function() {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined; // Check that the function returns undefined when success is false
  });
});
