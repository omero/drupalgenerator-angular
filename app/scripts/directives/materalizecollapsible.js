'use strict';

/**
 * @ngdoc directive
 * @name drupalgeneratorApp.directive:materalizeCollapsible
 * @description
 * # materalizeCollapsible
 */
angular.module('drupalgeneratorApp')
  .directive('materalizeCollapsible', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        setTimeout(function(){
          element.collapsible({
            accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
          });
        }, 500);
      }
    };
  });
