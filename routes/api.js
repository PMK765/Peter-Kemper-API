const express = require('express');
const router = express.Router();
const User = require('../models/users.model');

// Get the array of objects from db
router.get('/users', (request, response) => {
    // console.log(request.body);
    response.send({
        type: 'GET',
    });
});
// Add new object to db
router.post('/users', (request, response) => {
    User.create(request.body).then((insertError, insertResult) => {
        response.send()
    }); // all the db.insertOne in one call

    // response.send({
    //     type: 'POST',
    // });
});
// Update an object in db
router.put('/users/:id', (request, response) => {
    response.send({
        type: 'PUT',
    });
});
// Delete an object from db
router.delete('/users/:id', (request, response) => {
    response.send({
        type: 'DELETE',
    });
});

module.exports = router;
