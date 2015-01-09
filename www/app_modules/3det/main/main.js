angular.module("bsb.main", ["bsb.informacoes", "ui.router"])
    .config(["$stateProvider", "$urlRouterProvider",
             function($stateProvider, $urlRouterProvider) {
                 $stateProvider
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
    .factory("CharacterService",[
             function() {
                 // Private
                 var character = {
                     name: "Teste"
                 };

                 function getCharacter() {
                     return character;
                 };

                 // Public
                 return {
                     getCharacter : getCharacter
                 };
             }])
    .controller("MainCtrl", ["$scope", "$state",
                              function($scope, $state) {
                                  $scope.navs = [
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

                                  $scope.go = function(nav) {
                                      $state.go(nav.route);
                                  };

                              }]);
