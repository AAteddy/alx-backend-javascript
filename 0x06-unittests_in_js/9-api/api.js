const express = require('express');

// Create an instance of express
const app = express();

// Define the port to listen on
const PORT = 7865;

// Define the route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define a new route for GET /cart/:id with regex validation
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
