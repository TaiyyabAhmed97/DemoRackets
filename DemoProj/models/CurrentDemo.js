var mongoose = require('mongoose');

var CurrentDemoSchema = new mongoose.Schema({
    Customer:{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    Rackets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Racket' }],
    CheckedOut:{ type: Date, default: Date.now },
});

mongoose.model('CurrDemo', CurrentDemoSchema);