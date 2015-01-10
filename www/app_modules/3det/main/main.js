angular.module("bsb.3det.main", ["ui.router"])
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
                                          state: "3det.informacoes",
                                          active: true
                                      },
                                      {
                                          name: "Vantagens",
                                          state:"3det.vantagens"
                                      },
                                      {
                                          name: "Desvantagens",
                                          state: "3det.desvantagens"
                                      },
                                      {
                                          name: "Pericias",
                                          state: "3det.pericias"
                                      }
                                  ];
                              }]);
