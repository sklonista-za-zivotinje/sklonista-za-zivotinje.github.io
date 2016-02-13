'use strict';

angular.module('sklonista', [
      'ui.router', 'landing.controller','uiGmapgoogle-maps','data.services'
])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/index");
      $stateProvider
          .state('landing', {
            url: '/index',
            views:{
              "" : {
                templateUrl: 'components/sklonista/landing.view.html',
                  controller: 'LandingCtrl',
                  controllerAs: 'lc'
              },
              "data@landing" : {
                templateUrl  : 'components/sklonista/data.view.html'
              },

              "mapa@landing" : {
                templateUrl  : 'components/sklonista/map.view.html'
              }
            }
          })
    }])
