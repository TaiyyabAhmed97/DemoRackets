var mongoose = require('mongoose');

var RacketSchema = new mongoose.Schema({
    make: String,
    model: String
});

mongoose.model('Racket', RacketSchema);