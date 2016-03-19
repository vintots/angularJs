'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'toolbarDemo1',
  'myApp.loginController',
  'myApp.homepageController',
  'myApp.authService',
  'myApp.getUsersService',
  'myApp.apiservices',
  'myApp.apiRequest'
]);
