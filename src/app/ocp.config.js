(function () {
  'use strict';

  // Y128 https://github.com/johnpapa/angular-styleguide#style-y128
  // Why?: Separates configuration from module definition, components, and active code.
  // Why?: Provides an identifiable place to set configuration for a module.

  /** @ngInject */
  angular.module('ocp').config(function ($locationProvider) {

    // enable pretty URLs
    $locationProvider.html5Mode(true);

  });

})();
