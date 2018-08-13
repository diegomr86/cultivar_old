// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(falses);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    
    .state('app.home', {
       url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('app.plants', {
        url: '/plants',
        views: {
            'menuContent': {
                templateUrl: 'templates/plants.html',
                controller: 'PlantsCtrl'
            }
        }
    })

    .state('app.plants_of_this_month', {
        url: '/plants_of_this_month',
        views: {
            'menuContent': {
                templateUrl: 'templates/plants_of_this_month.html',
                controller: 'PlantsOfThisMonthCtrl'
            }
        }
    })

    .state('app.plant', {
        url: '/plants/:plantId',
        views: {
            'menuContent': {
                templateUrl: 'templates/plant.html',
                controller: 'PlantCtrl'
            }
        }
    })

    .state('app.basic_tips', {
        url: '/basic_tips',
        views: {
            'menuContent': {
                templateUrl: 'templates/basic_tips.html',
            }
        }
    })

    .state('app.planning', {
        url: '/planning',
        views: {
            'menuContent': {
                templateUrl: 'templates/planning.html',
            }
        }
    })

    .state('app.weather', {
        url: '/weather',
        views: {
            'menuContent': {
                templateUrl: 'templates/weather.html',
            }
        }
    })

    .state('app.planting', {
        url: '/planting',
        views: {
            'menuContent': {
                templateUrl: 'templates/planting.html',
            }
        }
    })

    .state('app.cares', {
        url: '/cares',
        views: {
            'menuContent': {
                templateUrl: 'templates/cares.html',
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }
        }
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
