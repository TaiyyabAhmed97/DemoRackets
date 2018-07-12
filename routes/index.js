var express = require('express');
var router = express.Router();
const http = require('http');
var logic = require('../BusinessLayer/demodetails.js');



/* DEMOS ROUTES */

// GET ALL CURRENT DEMOS
router.post('/text', function (req, res, next) {
  logic.textCustomer(req.body).then(function (result) {
    console.log("hereer");
    res.json(result);
  });
});

router.get('/rent', function (req, res, next) {
  logic.getDemos().then(function (result) {
    res.json(result);
  });
});

router.get('/history/:id', function (req, res, next) {
  logic.getCustHist(req.params.id).then(function (result) {
    console.log('hist');
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


/* GET ALL CustomerS */
router.get('/all', function (req, res, next) {
  logic.getCustomers().then(function (result) {
    res.json(result);
  });
});

// GET A SPECIFIC CUSTOMER BY PHONE#
router.get('/:id', function (req, res, next) {
  logic.getCustomerByPhone(req.params.id).then(function (response) {
    res.json(response);
  });
});

// GET A SPECIFIC CUSTOMER BY ID
router.get('/c/:id', function (req, res, next) {
  logic.getCustomerById(req.params.id).then(function (response) {
    res.json(response);
  });
});

// POST A CUSTOMER 
router.post('/', function (req, res, next) {
  logic.submitCustomer(req.body).then(function (response) {
    res.json(response);
  });
});

// UPDATE A CUSTOMERS INFO
router.put('/:id', function (req, res, next) {
  logic.updateCustomerbyId(req.params.id, req.body).then(function (result) {
    res.json(result);
  });
});

// DELETE A SPECIFIC CUSTOMER BY ID
router.delete('/:id', function (req, res, next) {
  logic.removeCustomerbyId(req.params.id).then(function (result) {
    res.json(result);
  });
});







module.exports = router;
