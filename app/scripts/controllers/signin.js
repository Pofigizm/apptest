'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the testApp
 */
angular.module('testApp')
.controller('SigninCtrl', function ( $scope, sign ) {

    $scope.user = {
      remember: false
    };
    $scope.error = false;

    $scope.hideErr = function( ){
      $scope.error = false;
    };

    $scope.doLogin = function( ){
      $scope.submitted = true;

      var userdata = {
        username: $scope.user.username,
        password: $scope.user.password,
        remember: $scope.user.remember
      };

      sign(userdata)
      .then( function(getdata){
        $scope.closeThisDialog(getdata);
      })
      .catch( function( ){
        $scope.error = true;
        $scope.$apply();
      });
    };

  });
