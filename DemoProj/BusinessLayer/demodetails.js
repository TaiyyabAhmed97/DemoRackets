var twilio = require('twilio');
var accountSid = 'ACf9a2ec804067f8911a51bd9f5188ecf7';
var authToken = "29204ba14d0d999ea6390f5b65dbe9b7";

//db dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Customer = require('../models/Customer');
var CurrentDemo = require('../models/CurrentDemo');


/* Demo Functions */
module.exports = {
  getDemos: function () {
    return new Promise(function (resolve, reject) {
      CurrentDemo.find({}, function (err, docs) {
        //console.log(docs);
        if (err) reject(err);
        resolve(docs);
      });
    });
  },
  wrapperFunc: async function () {
    let result = await this.getDemos();
    //console.log(result);
    var arr = [];
    var customer = {};
    for (var i = 0; i < result.length; i++) {
      let cust = await this.getCustomerById(result[i].CustomerId);
      customer['Customer'] = cust;
      customer['Rackets'] = result[i].Rackets;
      customer['CheckedOut'] = result[i].CheckedOut;
      customer['ReturnDate'] = result[i].ReturnDate;
      // console.log(customer);
      arr.push(customer);
    }
    //console.log(arr);
    return arr;
  },
  //random comment
  submitDemo: function (demo) {
    return new Promise(function (resolve, reject) {
      CurrentDemo.create(demo, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });
  },

  getDemoById: function (id) {
    return new Promise(function (resolve, reject) {
      CurrentDemo.findById(id, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });
  },

  updateDemobyId: function (id, demo) {
    return new Promise(function (resolve, reject) {
      CurrentDemo.findByIdAndUpdate(id, demo, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });

  },

  removeDemobyId: function (id, demo) {
    return new Promise(function (resolve, reject) {
      CurrentDemo.findByIdAndRemove(id, demo, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });
  },

  removeAllDemos: function () {
    return new Promise(function (resolve, reject) {
      CurrentDemo.remove({}, function (err, docs) {
        if (err) reject(err);
        resolve(docs);
      });
    })
  },







  /* Customer Functions */

  getCustomers: function () {
    return new Promise(function (resolve, reject) {
      Customer.find({}, function (err, docs) {
        //console.log(docs);
        if (err) reject(err);
        resolve(docs);
      });
    });
  },

  submitCustomer: function (customer) {
    return new Promise(function (resolve, reject) {
      Customer.create(customer, function (err, post) {

        if (err) reject(err);
        resolve(post);
      });
    });

  },

  getCustomerByPhone: function (id) {
    return new Promise(function (resolve, reject) {
      Customer.find({ "PhoneNum": id }, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });
  },

  getCustomerById: function (id) {
    return new Promise(function (resolve, reject) {
      Customer.findById(id, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });
  },

  updateCustomerbyId: function (id, demo) {
    return new Promise(function (resolve, reject) {
      Customer.findByIdAndUpdate(id, demo, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });

  },

  removeCustomerbyId: function (id, demo) {
    return new Promise(function (resolve, reject) {
      Customer.findByIdAndRemove(id, demo, function (err, post) {
        if (err) reject(err);
        resolve(post);
      });
    });
  },
  removeAllCustomers: function () {
    return new Promise(function (resolve, reject) {
      Customer.remove({}, function (err, docs) {
        if (err) reject(err);
        resolve(docs);
      });
    });
  },




  populateDemoDeetsWithCustomerInfo: function () {
    deet = any;
    this.getDemos().then(function (result) {
      deet = result;
    });

  }
};
