(function () {
  'use strict';

  // [Y050]
  // Factories should have a single responsibility, that is
  // encapsulated by its context. Once a factory begins to
  // exceed that singular purpose, a new factory should be created.

  // [Y051]
  // Factories are singletons and return an object that contains
  // the members of the service.
  angular.module('ocp').factory('claimInProgress', claimInProgress);

  var EXPIRE_TIME = 60 * 1000;
  /**
   * Stores an in-progress claim in localStorage so that
   * users can resume an interrupted workflow
   * @returns {{}}
   */

  /** @ngInject */
  function claimInProgress (localStorage, $q) {

    // [Y052]
    // Why?: Placing the callable members at the top makes it easy
    // to read and helps you instantly identify which members of
    // the service can be called and must be unit tested (and/or mocked).

    // Why?: This is especially helpful when the file gets longer as it
    // helps avoid the need to scroll to see what is exposed.

      var service = {
      saveClaim: saveClaim,
      getClaim: getClaim
    };

    return service;

    /**
     * Saves a claim to localStorage
     * @param {Object} claim - the claim model in progress
     */
    function saveClaim(claim) {
      claim.updatedAt = new Date();
      localStorage.setItem('claim', JSON.stringify(claim));
    }

    /**
     * Returns a claim in progress or a blank claim
     * @returns {Object} - a saved or blank claim
     */
    function getClaim() {
      var claim = JSON.parse(localStorage.getItem('claim'));
      if (claim && notExpired(claim.updatedAt)) {
        return $q.when(claim);
      } else {
        return $q.when({});
      }
    }

    /**
     * Checks if the updated date has expired
     * @param updatedDate
     * @returns {boolean}
     */
    function notExpired(updatedDate) {
      var now = new Date();
      var expiresAt = new Date(updatedDate);
      expiresAt.setTime(expiresAt.getTime() + EXPIRE_TIME);
      return (expiresAt.getTime() > now.getTime());
    }
  }
})();
