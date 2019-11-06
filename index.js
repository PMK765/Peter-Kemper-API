const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

// connect to mongoDB
mongoose.connect('mongodb://localhost/PeterKemper');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use('/api', routes);

// Listen for API requests
app.listen(process.env.port || 4000, () => {
    console.log('Listening for requests');
})
