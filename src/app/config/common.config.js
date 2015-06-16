(function () {
  'use strict';

  angular.module('ocp.config').factory('CommonConfig', CommonConfig);

  /** @ngInject */
  function CommonConfig (USStates) {
    var service = {
      USStates: USStates
    };

    return service;
  }

})();
