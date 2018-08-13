app.controller('HomeCtrl', function($scope, $rootScope, $http, $window, ionicMaterialInk) {
  function moonPhase(year, month, day)
  { 
    var r = year % 100;
    r %= 19;
    if (r>9){ r -= 19;}
    r = ((r * 11) % 30) + parseInt(month) + parseInt(day);
    if (month<3){r += 2;}
    r -= ((year<2000) ? 4 : 8.3);
    r = Math.floor(r+0.5)%30;
    return (r < 0) ? r+30 : r;
  }

  var today = new Date();
  var phase = moonPhase(today.getFullYear(), today.getMonth()+1, today.getDate())
  
  if (phase < 8) {
    $rootScope.moonPhase = 'nova';
    $rootScope.nextMoon = (8 - phase)
  } else if (phase < 15) {
    $rootScope.moonPhase = 'crescente';
    $rootScope.nextMoon = (15 - phase)
  } else if (phase < 22) {
    $rootScope.moonPhase = 'cheia';
    $rootScope.nextMoon = (22 - phase)
  } else {
    $rootScope.moonPhase = 'minguante';
    $rootScope.nextMoon = (30 - phase)
  } 
  
  ionicMaterialInk.displayEffect()
  
});