'use strict';

/**
 * @ngdoc function
 * @name drupalgeneratorApp.controller:NavLinksCtrl
 * @description
 * # NavLinksCtrl
 * Controller of the drupalgeneratorApp
 */
angular.module('drupalgeneratorApp')
  .controller('NavLinksCtrl', function ($scope, $http) {
      $http.get('command-generators.json').success(function(data) {
        $scope.generators = data.generators;
      });
  });
