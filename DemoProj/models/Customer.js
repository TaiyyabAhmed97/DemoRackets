var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    PhoneNum: String,
    email: String,
});

module.exports = mongoose.model('Customer', CustomerSchema);