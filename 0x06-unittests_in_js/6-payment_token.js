function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({data: 'Successful response from the API' });
  }
  // No return when success is false, making the function do nothing
}

module.exports = getPaymentTokenFromAPI;
