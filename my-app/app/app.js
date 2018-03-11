'use strict';

// Declare app level module which depends on views, and components
angular.module('my-app', [
  'ngRoute',
  'my-app.home',
  'my-app.register'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
