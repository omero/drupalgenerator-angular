'use strict';

describe('Directive: materalizeCollapsible', function () {

  // load the directive's module
  beforeEach(module('drupalgeneratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<materalize-collapsible></materalize-collapsible>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the materalizeCollapsible directive');
  }));
});
