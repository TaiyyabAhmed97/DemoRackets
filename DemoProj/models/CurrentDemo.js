

var mongoose = require('mongoose');
var moment = require('moment');

var CurrentDemoSchema = new mongoose.Schema({
    Rackets:  [String],
    CheckedOut: String,
    ReturnDate: String
});

module.exports = mongoose.model('CurrentDemo', CurrentDemoSchema);