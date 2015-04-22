'use strict';

/**
 * @ngdoc directive
 * @name drupalgeneratorApp.directive:materalizeSidenav
 * @description
 * # materalizeSidenav
 */
angular.module('drupalgeneratorApp')
  .directive('materalizeSidenav', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        element.sideNav();
      }
    };
  });
