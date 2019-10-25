const express = require('express');
const router = express.Router();

// Get the array of objects from db
router.get('/objects', (request, response) => {
    // console.log(request.body);
    response.send({
        type: 'GET',
    });
});
// Add new object to db
router.post('/objects', (request, response) => {
    response.send({
        type: 'POST',
    });
});
// Update an object in db
router.put('/objects/:id', (request, response) => {
    response.send({
        type: 'PUT',
    });
});
// Delete an object from db
router.delete('/objects/:id', (request, response) => {
    response.send({
        type: 'DELETE',
    });
});

module.exports = router;
