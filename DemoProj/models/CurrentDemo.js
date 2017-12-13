var mongoose = require('mongoose');

var CurrentDemoSchema = new mongoose.Schema({
    Customer:{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    Rackets:  [String],
    CheckedOut:{ type: Date, default: Date.now },
    ReturnDate: Date
});

module.exports = mongoose.model('CurrDemo', CurrentDemoSchema);