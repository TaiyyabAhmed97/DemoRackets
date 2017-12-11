var mongoose = require('mongoose');

var RacketSchema = new mongoose.Schema({
    make: String,
    model: String
});

module.exports =mongoose.model('Racket', RacketSchema);