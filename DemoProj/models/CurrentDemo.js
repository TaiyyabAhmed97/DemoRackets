var mongoose = require('mongoose');

var CurrentDemoSchema = new mongoose.Schema({
    Customer:{ type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    Rackets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'racket' }],
    CheckedOut:{ type: Date, default: Date.now },
});

mongoose.model('CurrentDemo', CurrentDemoSchema);