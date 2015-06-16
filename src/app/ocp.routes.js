(function () {
  'use strict';

  // Y129 https://github.com/johnpapa/angular-styleguide#style-y129
  // Separate route configuration into its own file.
  // Examples might be app.route.js for the main module and admin.route.js
  // for the admin module.

  /** @ngInject */
  angular.module('ocp').config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to root
    $urlRouterProvider.otherwise('claim');

    $stateProvider.state('app', {
      url: '/',
      abstract: true,
      views: {
        'header': {
          templateUrl: 'app/header/header.html'
        },
        'navigation': {
          templateUrl: 'app/navigation/navigation.html'
        },
        '': {}
      }


    }).state('app.newClaim', {
      url: 'claim',
      views: {
        '@': {
          templateUrl: 'app/claim/claim.html',
          // [Y038]
          // When a controller must be paired with a view and either
          // component may be re-used by other controllers or views, define controllers along with their routes.
          //
          //    Note: If a View is loaded via another means besides a route, then use the ng-controller="Avengers as vm" syntax.
          //
          //  Why?: Pairing the controller in the route allows different routes to invoke different pairs of controllers and views. When controllers are assigned in the view using ng-controller, that view is always associated with the same controller.


          controller: 'ClaimController',

          // [Y031]
          //  Use the controllerAs syntax over the classic controller with $scope syntax.
          //
          //  The controllerAs syntax uses this inside controllers which gets bound to $scope
          //
          // [Y032]
          // Use a capture variable for this when using the controllerAs syntax.
          //   Choose a consistent variable name such as vm, which stands for ViewModel.
          //
          // Why?: The this keyword is contextual and when used within a function
          //   inside a controller may change its context. Capturing the context
          //   of this avoids encountering this problem.
          controllerAs: 'vm'

        }
      }
    });

  });

})();
