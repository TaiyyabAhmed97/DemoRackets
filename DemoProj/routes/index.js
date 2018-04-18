var express = require('express');
var router = express.Router();
const http = require('http');
var logic = require('../BusinessLayer/demodetails.js');
/* DEMOS ROUTES */

// GET ALL CURRENT DEMOS
router.get('/d', function (req, res, next) {
  logic.getDemos().then(function (result) {
    res.json(result);
  });
});

// GET A SPECIFIC TRANSACTION BY ID
router.get('/d/:id', function (req, res, next) {
  logic.getDemoById(req.params.id).then(function (result) {
    res.json(result);
  });
});

// POST A TRANSACTION
router.post('/d', function (req, res, next) {
  logic.submitDemo(req.body).then(function (response) {
    res.json(response);
  });
});

// UPDATE A TRANSACTION
router.put('/d/:id', function (req, res, next) {
  logic.updateDemobyId(req.params.id, req.body).then(function (result) {
    res.json(result);
  });
});

router.delete('/d/:id', function (req, res, next) {
  logic.removeDemobyId(req.params.id, req.body).then(function (result) {
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

router.get('/id:id', function (req, res, next) {
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
  logic.removeCustomerbyId(req.params.id, req.body).then(function (result) {
    res.json(result);
  });
});






module.exports = router;
