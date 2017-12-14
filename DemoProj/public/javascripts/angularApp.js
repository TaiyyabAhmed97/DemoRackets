var app = angular.module('StringsAttached', []);
//var mongoose = require('mongoose');
//var db = mongoose.createConnection('mongodb://localhost:27017/database');

app.controller('MainCtrl', [
'$scope', '$http', 
function ($scope, $http) {
    $scope.test = "hello world!";
    $http.get('/demos').then(function (response) {
        $scope.demos = response.data;
        //console.log("demos", $scope.demos);
    });

}]);