const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create user schema and model
const UserSchema = new schema({
    userName: String,
    email: String,
    password: String,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;