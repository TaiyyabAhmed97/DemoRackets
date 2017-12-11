var express = require('express');
var router = express.Router();
//db dependencies
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Racket = mongoose.model('Racket');
var CurrentDemo = mongoose.model('CurrentDemo');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res, next){
  //test db working?
  var John = new Customer();
  John.firstname = 'John';
  John.lastname = 'Lol';
  John.Phonenum = '17737128894';
  John.email = 'email@email.com';

  var Wil = new Racket();
  Wil.make = 'Wilson';
  Wil.model = 'Pro Staff 97';

  var trans = new CurrentDemo();
  trans.Customer = John;
  trans.Rackets = [Wil];

  John.save();
  Wil.save();
  trans.save();
});

module.exports = router;
