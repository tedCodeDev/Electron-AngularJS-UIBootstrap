/*
 * File: app.js
 * Author: Theodore J. Mike
 * Created: 2/21/2017
 * Update: 2/21/2017
 * Description: main angular JavaScript file
*/

// create the angularjs app
var app = angular.module("boilerplate", ["ui.bootstrap"]);

// controller for main page
app.controller("appController", function ($scope){
  $scope.angularTest = "AngularJS is Working!";
});
