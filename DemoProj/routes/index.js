var express = require('express');
var router = express.Router();
//db dependencies
var mongoose = require('mongoose');
var Customer = require('../models/Customer');
var Racket = require('../models/Racket');
var CurrDemo = require('../models/CurrentDemo');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/post', function(req, res, next){
  //test db working?
  var John = new Customer();
  John.firstname = 'John';
  John.lastname = 'Lol';
  John.Phonenum = '17737128894';
  John.email = 'email@email.com';

  var Wil = new Racket();
  Wil.make = 'Wilson';
  Wil.model = 'Pro Staff 97';

  var trans = new CurrDemo();
  trans.Customer = John;
  trans.Rackets = [Wil];

  John.save();
  Wil.save();
  trans.save();
  res.send(200);
});

module.exports = router;
