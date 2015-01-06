angular.module("bsb.main", ["ui.router"])
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
             }])
    .controller("MainCtrl", ["$scope", "$state",
                              function($scope, $state) {
                                  $scope.tabs = [
                                      {
                                          name: "Informações",
                                          route: "3det.informacoes",
                                          active: true
                                      },
                                      {
                                          name: "Vantagens",
                                          route:"3det.vantagens"
                                      },
                                      {
                                          name: "Desvantagens",
                                          route: "3det.desvantagens"
                                      },
                                      {
                                          name: "Pericias",
                                          route: "3det.pericias"
                                      }
                                  ];

                                  $scope.go = function(tab) {
                                      $state.go(tab.route);
                                  };

                                  $scope.status = {
                                      isopen: true
                                  };

                                  $scope.toggleMenu = function() {
                                      $scope.status.isopen = !$scope.status.isopen;
                                  };

                              }]);
