var express = require('express');
var router = express.Router();
var twilio = require('twilio');
var accountSid = 'ACf9a2ec804067f8911a51bd9f5188ecf7';
var authToken = "29204ba14d0d999ea6390f5b65dbe9b7";
//db dependencies
const http = require('http');
var request=require('request');
var moment = require('moment');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Customer = require('../models/Customer');
var CurrentDemo = require('../models/CurrentDemo');
var DemoDeets = require('../models/DemoDetails');
//below is a test route





/* DEMOS ROUTES */

// GET ALL CURRENT DEMOS
router.get('/d', function (req, res, next) {
  CurrentDemo.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// GET A SPECIFIC TRANSACTION BY ID
router.get('/d:id', function (req, res, next) {
  CurrentDemo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// POST A TRANSACTION
router.post('/d', function (req, res, next) {
  CurrentDemo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post.id);
  });
});

// UPDATE A TRANSACTION
router.put('/d:id', function (req, res, next) {
  CurrentDemo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/d:id', function (req, res, next) {
  CurrentDemo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});






/* DemoDetails */
router.get('/c', function (req, res, next) {
  DemoDeets.find(function (err, products) {
    if (err) return next(err);
    var arr = [];
    var obj1;
    var obj2;
    http.get({
      hostname: 'localhost',
      port: 3000,
      path: '/d'+products[0].Customer,
      agent: false  // create a new agent just for this one request
    }, (res) => {
      obj1 = res;
      console.log(obj1);
      // Do stuff with response
    });
    /*for(var i =0;i<products.length;i++)
    {
      console.log("heloo");
      request.get('https://localhost:3000/'+products[i].Customer,function(err,res,body){
      console.log(obj1);
      obj1 = res;
      if (obj1 == null) {return null;}
      });
      request.get('https://localhost:3000/d'+products[i].Demo,function(err,res,body){
        obj2 = res;
        if (obj2 == null) {return null;}
        });
        let obj = Object.assign(obj1, obj2);
        arr.push(obj);
    }*/
  });
  res.send(obj1);
});

// GET A SPECIFIC TRANSACTION BY ID
router.get('/c:id', function (req, res, next) {
  DemoDeets.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// POST A TRANSACTION
router.post('/c', function (req, res, next) {
  DemoDeets.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// UPDATE A TRANSACTION
router.put('/c:id', function (req, res, next) {
  DemoDeets.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/c:id', function (req, res, next) {
  DemoDeets.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});








/* GET ALL CustomerS */
router.get('/', function (req, res, next) {
  Customer.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Customer BY ID */
router.get('/:id', function (req, res, next) {
  Customer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Customer */
router.post('/', function (req, res, next) {
  var client = new twilio(accountSid, authToken);
  client.messages.create({
    body: 'Hello ' + req.body.firstname + ' We hope you have fun with your new racket',
    to: '+1' + req.body.PhoneNum,
    from: '+12242493721'
  })
    .then((message) => console.log(message.sid));
  Customer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Customer */
router.put('/:id', function (req, res, next) {
  Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Customer */
router.delete('/:id', function (req, res, next) {
  Customer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});






module.exports = router;
