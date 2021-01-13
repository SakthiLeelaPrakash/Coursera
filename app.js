(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.countNoOfItems = function () {
  var count = 0;
    if ($scope.items) {
      var array = $scope.items.split(',');
      for (var i in array) {
        if (array[i].trim().length != 0) {
          count++;
        }
      }
    }
    $scope.message = displayOutputMsg(count);
  };

  function displayOutputMsg(count) {
    if (count == 0) {
      return 'Please enter dishes';
    }
    else if (count <= 3) {
      return 'Enjoy!!';
    } else {
      return 'Too much!!';
    }
  }
}

})();
