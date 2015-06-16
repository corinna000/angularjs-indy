(function () {
  'use strict';

  angular.module('ocp').factory('claim', claim);

  function claim($http, $q) {
    var service = {
      submit: save
    };

    return service;

    function save(form) {
      return $http.post('api/claim', form)
        .then(function (response) {
          validate(response.data);
          return $q.when(response.data);
        })
        .catch(function (err) {
          console.log('error: ', err);
        });
    }

    function validate(data) {
      angular.forEach(data, function (claim) {
        claim.dateOfPurchase = new Date(claim.dateOfPurchase);
      });
    }
  }

})();
