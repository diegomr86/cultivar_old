app.controller('PlantsCtrl', function($scope, $http, $timeout, ionicMaterialMotion) {

  $http({method: 'GET', url: 'plants.json'})
  .success(function(data){
    $scope.plants = []
    angular.forEach(data, function(plant) {
      if (plant.plantio[$scope.region] != "*") {
        $scope.plants.push(plant);
      }
    });

    $timeout(function () {
      ionicMaterialMotion.ripple();
    }, 300);

  })
  .error(function(){});
  
});