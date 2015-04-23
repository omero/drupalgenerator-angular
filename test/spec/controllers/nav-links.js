'use strict';

describe('Controller: NavLinksCtrl', function () {

  // load the controller's module
  beforeEach(module('drupalgeneratorApp'));

  var NavLinksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavLinksCtrl = $controller('NavLinksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
