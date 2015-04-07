'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the testApp
 */

angular.module('testApp')
  .controller('NavbarCtrl', function ( $rootScope, $scope, $location, sign,  ngDialog ) {

    $scope.signout = function() {
      if( localStorage ){
        localStorage.removeItem( 'test-auth' );
        localStorage.removeItem( 'test-id' );
        localStorage.removeItem( 'test-username' );
      }
      $rootScope.currentUser = null;
      $location.path('/');
    };

    $scope.signin = function() {

      ngDialog.open({
        template: 'views/signin.html',
        controller: 'SigninCtrl'
      })
      .closePromise.then(function(data){
        var getdata = data.value;
        if (getdata.id) {
          $rootScope.currentUser = {
            auth: true,
            id: getdata.id,
            username: getdata.username
          };
          if( localStorage && getdata.remember ){
            localStorage.setItem( 'test-auth', true );
            localStorage.setItem( 'test-id', getdata.id );
            localStorage.setItem( 'test-username', getdata.username );
          }
          $location.path('/admin');
        }
      });
    };
  });
