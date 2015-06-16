(function () {
  'use strict';

  angular.module('ocp.analytics').service('analytics', analytics);

  function analytics($rootScope) {
    var service = {
      initialize: initialize
    };

    return service;

    /**
     * Start tracking route change events for analytics
     */
    function initialize() {
      $rootScope.$on('$stateChangeSuccess', logPageview);
    }

    function logPageview (event, toState) {
      console.log('Changed state to: ' + toState.url);
    }


  }

})();
