const express = require('express');

// Set up express app
const app = express();

// Listen for API requests
app.listen(process.env.port || 4000, () => {
    console.log('Listening for requests');
})