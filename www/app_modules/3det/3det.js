angular.module("bsb.3det", ["bsb.3det.main", "bsb.3det.informacoes", "ui.bootstrap", "ui.router"])
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
                                templateUrl: "app_modules/3det/vantagens/vantagens.html"
                            })
                     .state("3det.desvantagens",
                            {
                                url: "/desvantagens",
                                templateUrl: "app_modules/3det/desvantagens/desvantagens.html"
                            })
                     .state("3det.pericias",
                            {
                                url: "/pericias",
                                templateUrl: "app_modules/3det/pericias/pericias.html"
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
