(function () {
  'use strict';

  /**
   * @ngdoc overview
   * The OCP Warranty Registration module.
   * Allows users to register warranty claims for defective OCP
   * products.
   */

  angular.module('ocp', [
    // first party modules
    'ocp.constants', 'ocp.config', 'ocp.analytics',
    // second and third party modules
    'ngSanitize', 'ui.router'
  ]);

})();
