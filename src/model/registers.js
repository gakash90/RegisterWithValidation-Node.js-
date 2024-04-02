const mongoose = require('mongoose');

// Define the schema for User
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: String,
    yearofbirth: Number,
    mobile: String,
    email: String,
    organisation: String,
});

//create a model for the schema 
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = {
    User: User
};
console.log("User schema is created")