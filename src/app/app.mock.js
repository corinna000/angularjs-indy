(function () {
  'use strict';

  /** @ngInject */
  angular.module('ocp')
    // Stubs out the Mocke2e httpBackend
    // http://michalostruszka.pl/blog/2013/05/27/easy-stubbing-out-http-in-angularjs-for-backend-less-frontend-development/
    .config(function ($provide) {
      $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
    })
    .run(function ($httpBackend) {
    // By default pass all GET requests
    $httpBackend.whenGET(/.*/).passThrough();

  });
})();
