app.controller('PlantCtrl', function($scope, $stateParams, $http) {
  $http({method: 'GET', url: 'plants.json'})
  .success(function(data){
    console.log($stateParams.plantId);
    $scope.plant = data[$stateParams.plantId] 
    $scope.regions = ["Sul",  "Sudeste",  "Nordeste",  "Centro-Oeste",  "Norte"]
  })
  .error(function(){

  });

});