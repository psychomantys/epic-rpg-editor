angular.module("bsb.3det", ["bsb.main", "ui.router", "ui.bootstrap"])
    .config(["$stateProvider", "$urlRouterProvider",
             function($stateProvider, $urlRouterProvider) {
                 $urlRouterProvider.otherwise("/3det/informacoes");

                 $stateProvider
                     .state("3det",
                            {
                                abstract: true,
                                url: "/3det",
                                templateUrl: "app_modules/main/main.html"
                            })
                     .state("3det.informacoes",
                            {
                                url: "/informacoes",
                                templateUrl: "app_modules/informacoes/informacoes.html"
                            })
                     .state("3det.vantagens",
                            {
                                url: "/vantagens",
                                templateUrl: "app_modules/vantagens/vantagens.html"
                            })
                     .state("3det.desvantagens",
                            {
                                url: "/desvantagens",
                                templateUrl: "app_modules/desvantagens/desvantagens.html"
                            })
                     .state("3det.pericias",
                            {
                                url: "/pericias",
                                templateUrl: "app_modules/pericias/pericias.html"
                            });
             }]);
