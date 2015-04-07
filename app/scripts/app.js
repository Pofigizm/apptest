'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngResource',
    'ngRoute',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location, sign ) {

    if ( localStorage && localStorage.getItem('test-auth') ){
      var user = {
        id: localStorage.getItem('test-id'),
        username: localStorage.getItem('test-username'),
        password: 'password'
      };

      sign(user)
      .then( function(getdata){
        $rootScope.currentUser = {
          auth: true,
          id: getdata.id,
          username: getdata.username
        };
      })
      .catch( function( ){
        $rootScope.currentUser = null;
        $location.path('/');
      });
    } else {
      $rootScope.currentUser = null;
      $location.path('/');
    }
  });
