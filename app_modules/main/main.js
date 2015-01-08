angular.module("bsb.main", [])
    .factory("CharacterService",
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
             })
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
