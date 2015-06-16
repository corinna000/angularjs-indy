(function () {
  'use strict';

  angular.module('ocp').factory('wizard', wizard);

  /**
   * Tracks steps along a wizard workflow
   */

  function wizard() {
    var service = {
      newWizard: newWizard
    };

    function newWizard(steps) {
      function Wizard () {
        this.currentStep = 1;
        this.totalSteps = steps;
      }

      /**
       * Returns the current step
       * @returns {number}
       */
      Wizard.prototype.current = function current () {
        return this.currentStep;
      };

      /**
       * Iterates to the next step if possible, or undefined
       * @returns {number}
       */
      Wizard.prototype.next = function next () {
        if (this.currentStep + 1 <= this.totalSteps) {
          return this.currentStep += 1;
        }
      };

      /**
       * Returns to a previous step if possible, or undefined
       * @returns {number}
       */
      Wizard.prototype.previous = function previous () {
        if (this.currentStep - 1 >= 1) {
          return this.currentStep -= 1;
        }
      };

      return new Wizard();
    }

    return service;
  }

})();
