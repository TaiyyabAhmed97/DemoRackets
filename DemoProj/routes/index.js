var express = require('express');
var router = express.Router();
var twilio = require('twilio');
var accountSid = 'ACf9a2ec804067f8911a51bd9f5188ecf7';
var authToken = "29204ba14d0d999ea6390f5b65dbe9b7";
//db dependencies
var moment = require('moment');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Customer = require('../models/Customer');
var CurrDemo = require('../models/CurrentDemo');
//below is a test route





/* DEMOS ROUTES */
router.get('/d', function(req, res, next) {
  CurrDemo.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/d:id', function(req, res, next) {
  CurrDemo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/d', function(req, res, next) {
      var cust =  Customer.findById(req.custId);
      //var demo = CurrDemo{}
     // CurrDemo. 
});



/* GET ALL CustomerS */
router.get('/', function(req, res, next) {
  Customer.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Customer BY ID */
router.get('/:id', function(req, res, next) {
  Customer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Customer */
router.post('/', function(req, res, next) {
  var client = new twilio(accountSid, authToken);
  client.messages.create({
	body: 'Hello '+req.body.firstname+'We hope you have fun with your new racket',
	to: '+1'+req.body.PhoneNum,
	from: '+12242493721'
})
.then((message) => console.log(message.sid));
  Customer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Customer */
router.put('/:id', function(req, res, next) {
  Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Customer */
router.delete('/:id', function(req, res, next) {
  Customer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});






module.exports = router;
