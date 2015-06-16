(function () {
  'use strict';

  // [Y240]
  // Create an Angular Constant for vendor libraries' global variables.
  //
  // Why?: Provides a way to inject vendor libraries that otherwise are globals. This improves code testability by allowing you to more easily know what the dependencies of your components are (avoids leaky abstractions). It also allows you to mock these dependencies, where it makes sense.
  angular.module('ocp.constants').constant('localStorage', localStorage);

})();
