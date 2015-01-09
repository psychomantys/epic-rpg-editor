angular.module("bsb.3det", ["bsb.main", "ui.router", "ui.bootstrap"])
    .config(["$stateProvider", "$urlRouterProvider",
             function($stateProvider, $urlRouterProvider) {
                 $urlRouterProvider.otherwise("/3det");

                 $stateProvider
                     .state("3det",
                            {
                                url: "/3det",
                                templateUrl: "app_modules/3det/main/main.html",
                                controller: "MainCtrl"
                            })
                     .state("seletor",
                            {
                                url: "/seletor",
                                templateUrl: "app_modules/seletor/seletor.html"
                            });
             }])
    .directive("myMenu",
               function() {
                   return {
                       templateUrl: "app_modules/diretivas/menu.html"
                   };
               }
              );
