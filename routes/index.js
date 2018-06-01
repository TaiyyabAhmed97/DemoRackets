var express = require('express');
var router = express.Router();
const http = require('http');
var logic = require('../BusinessLayer/demodetails.js');

var accountSid = 'ACf9a2ec804067f8911a51bd9f5188ecf7';
var authToken = "29204ba14d0d999ea6390f5b65dbe9b7";
var client = require('twilio')(accountSid, authToken);

/* DEMOS ROUTES */

// GET ALL CURRENT DEMOS
router.post('/text', function (req, res, next) {
  client.messages
    .create({
      body: req.body.message,
      from: '+12244791075',
      to: req.body.phonenum
    })
    .then(message => console.log(message.sid))
    .done();
})

router.get('/rent', function (req, res, next) {
  logic.getDemos().then(function (result) {
    res.json(result);
  });
});

router.get('/rent/modified', function (req, res, next) {
  logic.wrapperFunc().then(function (result) {
    let arr = result;
    res.json(arr);
  });
});
router.get('/rent/modified/:id', function (req, res, next) {
  logic.getDemoDetailsById(req.params.id).then(function (result) {
    console.log("here");
    res.json(result);
  });
});

// GET A SPECIFIC TRANSACTION BY ID
router.get('/rent:id', function (req, res, next) {
  logic.getDemoById(req.params.id).then(function (result) {
    res.json(result);
  });
});

// POST A TRANSACTION
router.post('/rent', function (req, res, next) {
  logic.submitDemo(req.body).then(function (response) {
    res.json(response);
  });
});

// UPDATE A TRANSACTION
router.put('/rent:id', function (req, res, next) {
  logic.updateDemobyId(req.params.id, req.body).then(function (result) {
    res.json(result);
  });
});

router.delete('/rent:id', function (req, res, next) {
  logic.removeDemobyId(req.params.id).then(function (result) {
    res.json(result);
  });
});

router.delete('/rent', function (req, res, next) {
  logic.removeAllDemos().then(function (result) {
    res.json(result);
  });
});


// GET A SPECIFIC TRANSACTION BY ID


// POST A TRANSACTION


// UPDATE A TRANSACTION











/* GET ALL CustomerS */
router.get('/', function (req, res, next) {
  logic.getCustomers().then(function (result) {
    res.json(result);
  });
});

// GET A SPECIFIC TRANSACTION BY ID
router.get('/:id', function (req, res, next) {
  logic.getCustomerByPhone(req.params.id).then(function (response) {
    res.json(response);
  });
});

router.get('/c/:id', function (req, res, next) {
  logic.getCustomerById(req.params.id).then(function (response) {
    res.json(response);
  });
});

// POST A TRANSACTION
router.post('/', function (req, res, next) {
  logic.submitCustomer(req.body).then(function (response) {
    res.json(response);
  });
});

// UPDATE A TRANSACTION
router.put('/:id', function (req, res, next) {
  logic.updateCustomerbyId(req.params.id, req.body).then(function (result) {
    res.json(result);
  });
});

router.delete('/:id', function (req, res, next) {
  logic.removeCustomerbyId(req.params.id).then(function (result) {
    res.json(result);
  });
});
router.delete('/', function (req, res, next) {
  logic.removeAllCustomers().then(function (result) {
    res.json(result);
  });
});






module.exports = router;
