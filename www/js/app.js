// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var ajaxurl = "http://103.247.11.152/~chalax/mctrl/";
var ajaxurl1 = "http://103.247.11.152/~chalax/mctrl1/";
// var ajaxurl = "http://127.0.0.1/sikaprodi2/mctrl/";
// var ajaxurl1 = "http://127.0.0.1/sikaprodi2/mctrl1/";
angular.module('starter', ['ionic', 'starter.controllers','ionic-material', 'ionMdInput','tc.chartjs','firebase','froala'])
.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
])
.run(function($ionicPlatform,$firebaseAuth) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }


        


          


    });
})


.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    var config = {
            apiKey: "AIzaSyDedQHEcVmpizRRxcxDPUSW1wO3bM92QtY",
            authDomain: "konsultasi-cabai.firebaseapp.com",
            databaseURL: "https://konsultasi-cabai.firebaseio.com",
            projectId: "konsultasi-cabai",
            storageBucket: "konsultasi-cabai.appspot.com",
            messagingSenderId: "73163022288"
          };
          firebase.initializeApp(config);



    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.beranda', {
        url: '/beranda',
        views: {
            'menuContent': {
                templateUrl: 'templates/beranda.html',
                controller: 'BerandaCtrl'
            }
        }
    })
    .state('app.newartikel', {
        url: '/newartikel',
        views: {
            'menuContent': {
                templateUrl: 'templates/newartikel.html',
                controller: 'NewArtikelCtrl'
            }
        }
    })
    .state('app.detailartikel',{
        url:'/detailartikel/:idartikel',
        views:{
            'menuContent':{
                templateUrl:'templates/detailartikel.html',
                controller:'DetailArtikelCtrl'
            }
        }
    })
    .state('app.ruangdiskusi',{
        url:'/ruangdiskusi',
        views:{
            'menuContent':{
                templateUrl:'templates/ruangdiskusi.html',
                controller:'RuangDiskusiCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});
