app.controller('PlantsOfThisMonthCtrl', function($scope, $http, $timeout, ionicMaterialMotion) {

  $scope.month_code = (new Date()).getMonth();
  // $scope.month_code = 9;

  $http({method: 'GET', url: 'months.json'})
  .success(function(data){
    $scope.month_desc = data[$scope.month_code]
    console.log(data)
    console.log($scope.month_desc)
  })
  .error(function(){});

  $scope.months = { "jan": [1, "Janeiro"], "fev": [2, "Fevereiro"], "mar": [3, "Março"], "abr": [4, "Abril"], "mai": [5, "Maio"], "jun": [6, "Junho"], "jul": [7, "Julho"], "ago": [8, "Agosto"], "set": [9, "Setembro"], "out": [10, "Outubro"], "nov": [11, "Novembro"], "dez": [12, "Dezembro"] }

  angular.forEach($scope.months, function(month, key) {
    if (month[0] == ($scope.month_code + 1)) {
      $scope.month = month;
      return
    }
  });

  $http({method: 'GET', url: 'plants.json'})
  .success(function(data){
    $scope.plants = []
    angular.forEach(data, function(plant) {
      if (plant.plantio[$scope.region] == "ano todo") {
        $scope.plants.push(plant);
      } else if (plant.plantio[$scope.region] != "*") {
        plantio = plant.plantio[$scope.region].split('-')
        plantio1 = $scope.months[plantio[0]][0]
        plantio2 = $scope.months[plantio[1]][0]
    
        if (plantio1 <= plantio2) {
          if ($scope.month[0] >= plantio1 && $scope.month[0] <= plantio2) {
            $scope.plants.push(plant);
          }
        } else {
          if (($scope.month[0] >= plantio1 && $scope.month[0] <= 12) && ($scope.month[0] >= 1 && $scope.month[0] <= plantio2)) {
            $scope.plants.push(plant);
          }
        }
      }
      
    });

    $timeout(function () {
      // ionicMaterialMotion.ripple();
    }, 300);

  })
  .error(function(){

  });
  
});