// console.log('table loaded');
define(['angular', 'relations', 'statements'], function (angular, relations) {
  var app = angular.module('DatabaseApp')
  // console.log('table called');
  app.controller('TableController', function ($scope) {
    // console.log('tableController instantiated');
    $scope.init = function (div_id) {
      $scope.relation = relations[div_id];
    };
  });
});
