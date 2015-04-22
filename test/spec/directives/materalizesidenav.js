'use strict';

describe('Directive: materalizeSidenav', function () {

  // load the directive's module
  beforeEach(module('drupalgeneratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<materalize-sidenav></materalize-sidenav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the materalizeSidenav directive');
  }));
});
