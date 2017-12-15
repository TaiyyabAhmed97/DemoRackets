var express = require('express');
var router = express.Router();
//db dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Customer = require('../models/Customer');
var CurrDemo = require('../models/CurrentDemo');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//below is a test route
router.get('/post', function(req, res, next){
  //test db working?
  var John = new Customer({firstname: 'John', lastname:'Bob', Phonenum:'9870345', email:'email@email.com'});
  var Paul = new Customer({firstname: 'Paul', lastname: "sam", Phonenum: '1234567800', email:'me@email.com' });
  var trans = new CurrDemo({Customer:John, Rackets:["Wilson Pro Staff 97", "Babolat Pure Drive"]});
  var trans1 = new CurrDemo({Customer: Paul, Rackets:["Yonex Vcoresv98", "Head phones"]});

  John.save();
  Paul.save();
  trans.save();
  trans1.save();
  res.send(200);
});
//above is a test route

router.get('/customers', function(req, res, next){
  Customer.find({}).exec(function(err, ret){
    res.json(ret);
  });
}); // GET all Customers

router.post('/customer', function(req, res, next){

}); // POST a Customer

router.put('/customer/:id', function(req, res, next){}); // PUT a customer (update name/num/email/phonenum)

router.delete('/customer/:id', function(req, res, next){}); //DELETE a customer

router.get('/demos', function(req, res, next){
  CurrDemo.find({})
  .populate('Customer')
  .populate('Racket')
  .exec(function(err, ret){
    res.json(ret);
  });
}); //GET all current demo-ed out rackets

router.post('/demos', function(req, res, next){}); // POST a (transaction)

router.put('/demos/:id', function(req, res, next){}); //PUT a transaction (update cust info or racket info or check out date)

router.delete('/demos/:id', function(req, res, next){}); //DELETE a transaction ( for now, later we can move this to another table "Returned Demos")



module.exports = router;
