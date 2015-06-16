(function () {
  'use strict';

  angular.module('ocp').constant('submitClaimMock', {
    success: {
      claim: {
        fullName: 'Max Headroom',
        email: 'max_headroom@example.com',
        city: 'Indianapolis',
        state: 'IN',
        postalCode: '46201-0010',
        purchasedAt: '100',
        dateOfPurchase: '2015-06-16T01:32:59.829Z',
        productCode: 'S2DUDZ-072',
        claimReason: 'customer damaged',
        notes: 'I wore them during a rainstorm.'
      }
    }
  }).run(function ($httpBackend, submitClaimMock) {

    console.log('MOCKING `/api/claim`');
    $httpBackend.whenPOST(/api\/claim/).respond(function (url, data) {
      return [200, submitClaimMock.success, {}];
    });
  });
})();
