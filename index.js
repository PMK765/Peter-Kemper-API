const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

// Set up express app
const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

// Listen for API requests
app.listen(process.env.port || 4000, () => {
    console.log('Listening for requests');
})
