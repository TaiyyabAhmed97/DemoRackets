

//db dependencies
var mongoose = require('mongoose');
mongoose.connect('mongodb://tahmd5:ibrahim1125@cluster0-shard-00-00-vpsvb.mongodb.net:27017,cluster0-shard-00-01-vpsvb.mongodb.net:27017,cluster0-shard-00-02-vpsvb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {
  useMongoClient: true,
  /* other options */
});
var Customer = require('../models/Customer');
var CurrentDemo = require('../models/CurrentDemo');
var accountSid = 'ACf9a2ec804067f8911a51bd9f5188ecf7';
var authToken = "29204ba14d0d999ea6390f5b65dbe9b7";
var client = require('twilio')(accountSid, authToken);






/* Demo Functions */
module.exports = {
  getFinishedDemos: function () {


  },
  textCustomer: function (message) {
    console.log("hrerere");
    return new Promise(function (resolve, reject) {
      client.messages
        .create({
          body: message.message,
          from: '+12244791075',
          to: '+1' + message.phonenum
        })
        .then(resolve(message))
        .done();

    })
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

  getCustHist: async function (custid) {
    let result = await this.getDemos();
    //console.log(result);
    var arr = [];

    for (var i = 0; i < result.length; i++) {
      var demoDetails = await this.populateDemoDetails(result[i]);
      if (demoDetails.custid == custid) {
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
