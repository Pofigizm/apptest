'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the apptestApp
 */
angular.module('testApp')
  .controller('AdminCtrl', function ( $scope, $rootScope, $location ) {
    if( !$rootScope.currentUser ) $location.path('/');
  });
