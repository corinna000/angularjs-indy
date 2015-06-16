(function () {
  'use strict';

  angular.module('ocp').controller('ClaimController', ClaimController);

  var MAX_STEPS = 3;

  /** @ngInject */
  function ClaimController(claimInProgress, claim, CommonConfig, wizard) {
    // [Y032]
    // Use a capture variable for this when using the controllerAs
    // syntax. Choose a consistent variable name such as vm,
    // which stands for ViewModel.
    //
    // Why?: The this keyword is contextual and when used within a
    // function inside a controller may change its context.
    // Capturing the context of this avoids encountering this problem
    var vm = this;
    var stepTracker;
    vm.step = 1;
    vm.model = null;
    vm.nextStep = nextStep;
    vm.previousStep = previousStep;
    vm.submitClaim = submitClaim;
    vm.states = CommonConfig.USStates;

    activate();

    // [Y080]
    // Resolve start-up logic for a controller in an activate function.
    // Why?: Placing start-up logic in a consistent place in the
    // controller makes it easier to locate, more consistent to
    // test, and helps avoid spreading out the activation logic
    // across the controller.
    //
    // Why?: The controller activate makes it convenient to re-use
    // the logic for a refresh for the controller/View, keeps the
    // logic together, gets the user to the View faster, makes
    // animations easy on the ng-view or ui-view, and feels
    // snappier to the user.

    function activate() {
      claimInProgress.getClaim().then(function (claim) {
        vm.model = claim;
      });
      stepTracker = wizard.newWizard(MAX_STEPS);
    }

    /**
     * Validates any business logic, saves the claim
     * and then advances the step
     */
    function nextStep() {
      saveClaim();
      advanceStep();
    }

    /**
     * Takes the user back a step after saving the
     * form contents.
     */
    function previousStep() {
      saveClaim();
      reverseStep();
    }

    function saveClaim() {
      claimInProgress.saveClaim(vm.model);
    }

    function submitClaim() {
      claim.submit(vm.model).then(function (data) {
        vm.model = data.claim;
      });
    }

    function advanceStep() {
      return vm.step = stepTracker.next();
    }

    function reverseStep() {
      return vm.step = stepTracker.previous();
    }
  }

})();
