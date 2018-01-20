var express = require('express');
var router = express.Router();
var twilio = require('twilio');
var accountSid = 'ACf9a2ec804067f8911a51bd9f5188ecf7';
var authToken = "29204ba14d0d999ea6390f5b65dbe9b7";
//db dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Customer = require('../models/Customer');
var CurrDemo = require('../models/CurrentDemo');
//below is a test route
router.get('/', function(req, res, next){

  res.json("Hi");
});
router.get('/post', function(req, res, next){
  //test db working?
  var John = new Customer({firstname: 'John', lastname:'Bob', PhoneNum:'9870345', email:'email@email.com'});
  var Paul = new Customer({firstname: 'Paul', lastname: "sam", PhoneNum: '1234567800', email:'me@email.com' });
  var trans = new CurrDemo({Customer:John, Rackets:["Wilson Pro Staff 97", "Babolat Pure Drive"]});
  var trans1 = new CurrDemo({Customer: Paul, Rackets:["Yonex Vcoresv98", "Head phones"]});

  John.save();
  Paul.save();
  trans.save();
  trans1.save();
  res.send(200);
});
//above is a test route
router.get('/nopost',function(req, res, next){
  console.log("here");
  Customer.find({}).remove().exec();
  CurrDemo.find({}).remove().exec();
  res.json('works');

});
router.get('/customers', function(req, res, next){
  console.log("not here");
  Customer.find({}).exec(function(err, ret){
    res.json(ret);
  });
}); // GET all Customers

router.post('/something', function(req, res, next){
let fname = req.body.fname;
let lname = req.body.lname;
let email = req.body.email;
let phonenum = req.body.phonenum;
var temp = new Customer({firstname:fname, lastname:lname, PhoneNum:phonenum, email:email});
temp.save();
var client = new twilio(accountSid, authToken);
  client.messages.create({
	body: 'Hello '+req.body.fname+'We hope you have fun with your new racket',
	to: '+17737128894',
	from: '+12242493721'
})
.then((message) => console.log(message.sid));
res.send(200);
}); // POST a Customer

router.get('/customer/:phonenum', function(req, res, next){
  Customer.find({'PhoneNum': req.params.phonenum})
    .exec(function(err, ret)
  {
    
    res.json(ret);
  });
}); // PUT a customer (update name/num/email/phonenum)

router.delete('/customer/:id', function(req, res, next){}); //DELETE a customer

router.get('/demos', function(req, res, next){
  CurrDemo.find({})
  .populate('Customer')
  .populate('Racket')
  .exec(function(err, ret){
    res.json(ret);
  });
}); //GET all current demo-ed out rackets

router.post('/demos', function(req, res, next){
  
  let cust1 = Customer.find({'PhoneNum': req.body.Customer.PhoneNum})
    .exec(function(err, ret){
      return ret;
    });
  let arr = JSON.parse(JSON.stringify(req.body.Rackets));
  let date = req.body.CheckedOut;
  let temp = new CurrDemo({Customer:cust1, CheckedOut: date, Rackets: arr});
  temp.save();
  
}); // POST a (transaction)

router.put('/demos/:id', function(req, res, next){}); //PUT a transaction (update cust info or racket info or check out date)

router.delete('/demos/:id', function(req, res, next){
CurrDemo.remove(req.params.id, callback);

}); //DELETE a transaction ( for now, later we can move this to another table "Returned Demos")



module.exports = router;
