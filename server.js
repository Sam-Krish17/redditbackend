// Import necessary modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Initialize express app
const app = express();

// Use CORS to allow all origins (You can restrict this if needed)
app.use(cors());

// Define a route to act as a proxy to the Reddit API
app.get('/', async (req, res) => {
  try {
    // Make a request to Reddit API
    const response = await axios.get('https://www.reddit.com/r/Angular2.json');


    // Send the Reddit API response back to the client
    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    // Handle errors and send the error response
    console.error('Error fetching data from Reddit API:', error.message);
    res.status(500).json({ error: 'Error fetching data from Reddit API' });
  }
});

// Set the server to listen on port 3000 (or any port you prefer)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
