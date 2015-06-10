angular.module('phavr.favor', [])
.controller('favorCtrl', function ($scope, $window, $location, Favors, mapService){

  /**
   * Description
   * @method createFavor
   * @return 
   */
  $scope.createFavor = function() {
    console.log("I'm INSIDE THE CREATE!")
    var mapFavor = mapService.favor;
      if (mapFavor) {
        $scope.favor.address = mapFavor.address;
        $scope.favor.place_name = mapFavor.place_name;
        $scope.favor.location = mapFavor.location;
        $scope.favor.icon = mapFavor.icon;
      }
      
      Favors.saveRequest($scope.favor);
      $location.path('/home');
  };

});

