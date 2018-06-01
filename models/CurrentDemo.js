

var mongoose = require('mongoose');
var moment = require('moment');

var CurrentDemoSchema = new mongoose.Schema({
    CustomerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    Rackets: [String],
    CheckedOut: String,
    ReturnDate: String,
    Returned: { type: Boolean, default: false }
});

module.exports = mongoose.model('CurrentDemo', CurrentDemoSchema);
