

//db dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://<taiyyab.a97@gmail.com>:<Cps50039870!>@cluster0-vpsvb.mongodb.net/test?retryWrites=true');
var Customer = require('../models/Customer');
var CurrentDemo = require('../models/CurrentDemo');






/* Demo Functions */
module.exports = {
  getFinishedDemos: function () {


  },
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

    for (var i = 0; i < result.length; i++) {
      var demoDetails = await this.populateDemoDetails(result[i]);
      if (!demoDetails.Returned) {
        arr.push(demoDetails);
      }
      console.log(demoDetails);

    }
    console.log(arr);
    return arr;
  },

  getDemoDetailsById: async function (demoId) {
    let demo = await this.getDemoById(demoId);
    return this.populateDemoDetails(demo);
  },

  populateDemoDetails: async function (demo) {

    // console.log(demo);
    var customer = {};
    let cust = await this.getCustomerById(demo.CustomerId);
    // console.log(cust);

    customer['custid'] = cust._id;
    customer['firstname'] = cust.firstname;
    customer['lastname'] = cust.lastname;
    customer['PhoneNum'] = cust.PhoneNum;
    customer['email'] = cust.email;
    customer['demoid'] = demo._id;
    customer['Rackets'] = demo.Rackets;
    customer['CheckedOut'] = demo.CheckedOut;
    customer['ReturnDate'] = demo.ReturnDate;
    customer['Returned'] = demo.Returned;

    // console.log(customer);
    return customer;

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

  removeDemobyId: function (id) {
    return new Promise(function (resolve, reject) {
      CurrentDemo.findByIdAndRemove(id, function (err, post) {
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

  removeCustomerbyId: function (id) {
    return new Promise(function (resolve, reject) {
      Customer.findByIdAndRemove(id, function (err, post) {
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
