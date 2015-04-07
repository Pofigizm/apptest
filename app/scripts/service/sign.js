'use strict';

/**
 * @ngdoc service
 * @name testApp.sign
 * @description
 * # sign
 * Service in the testApp.
 */

angular.module('testApp')
  .factory('sign', function(){
    return function(user){

      if ( !user.username || !user.password ) return Promise.reject();

      return Promise.resolve({
        id: 1,
        username: user.username,
        remember: user.remember
      });
    };
  });
