angular.module("bsb.3det", ["bsb.3det.main", "bsb.3det.informacoes", "bsb.3det.specials", "ui.bootstrap", "ui.router"])
    .config(["$stateProvider", "$urlRouterProvider",
             function($stateProvider, $urlRouterProvider) {
                 $urlRouterProvider.otherwise("/informacoes");

                 $stateProvider
                     .state("3det",
                            {
                                abstract: true,
                                templateUrl: "app_modules/3det/main/main.html",
                                controller: "MainCtrl"
                            })
                     .state("3det.informacoes",
                            {
                                url: "/informacoes",
                                templateUrl: "app_modules/3det/informacoes/informacoes.html",
                                controller: "InfoCtrl"
                            })
                     .state("3det.vantagens",
                            {
                                url: "/vantagens",
                                templateUrl: "app_modules/3det/specials/specials.html",
                                controller: "VantagemCtrl"
                            })
                     .state("3det.desvantagens",
                            {
                                url: "/desvantagens",
                                templateUrl: "app_modules/3det/specials/specials.html",
                                controller: "DesvantagemCtrl"
                            })
                     .state("3det.pericias",
                            {
                                url: "/pericias",
                                templateUrl: "app_modules/3det/specials/specials.html",
                                controller: "PericiaCtrl"
                            });
             }])
    .directive("myMenu",
               function() {
                   return {
                       templateUrl: "diretivas/menu.html"
                   };
               }
              )
    .run(function() {
        FastClick.attach(document.body);
    });;
