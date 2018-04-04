var mongoose = require('mongoose');

var DemoDetailsSchema = new mongoose.Schema({
    Customer:{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    Demo: {type: mongoose.Schema.Types.ObjectId, ref: 'CurrentDemo'}
});

module.exports = mongoose.model('DemoDetails', DemoDetailsSchema);