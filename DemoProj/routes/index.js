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

//above is a test route
router.get('/nopost',function(req, res, next){
  console.log("here");
  Customer.find({}).remove().exec();
  CurrDemo.find({}).remove().exec();
  res.json('works');

});

router.delete('/:id', function(req, res, next){
  Customer.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if(err) return next(err);
    res.json(post);

  });
});

router.get('/customers', function(req, res, next){
  console.log("not here");
  Customer.find({}).exec(function(err, ret){
    res.json(ret);
  });
}); // GET all Customers

router.post('/something', function(req, res, next){
Customer.create(req.body, function (err, post){
  if (err) return next(err);
    res.json(post);
});
var client = new twilio(accountSid, authToken);
  client.messages.create({
	body: 'Hello '+req.body.firstname+'We hope you have fun with your new racket',
	to: '+17737128894',
	from: '+12242493721'
})
.then((message) => console.log(message.sid));
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
