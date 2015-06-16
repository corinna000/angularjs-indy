(function () {
  'use strict';

  angular.module('ocp').run(appInit);

  // [Y171]
  // Any code that needs to run when an application starts
  // should be declared in a factory, exposed via a function,
  // and injected into the run block.
  //
  // Why?: Code directly in a run block can be difficult to test.
  // Placing in a factory makes it easier to abstract and mock.

  /** @ngInject */
  function appInit(analytics) {
    analytics.initialize();
  }

})();
