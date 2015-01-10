angular.module("bsb.3det.main", ["ui.router"])
    .factory("CharacterService",[
             function() {
                 // Private
                 var character = {
                     name: "Teste",
                     vantagens: [
                         {
                             name: "Teste",
                             description: "testeste",
                             cost: 2
                         },
                         {
                             name: "teste12",
                             description: "teatatata",
                             cost: 1
                         }
                     ],
                     desvantagens: [
                         {
                             name: "feio",
                             description: "nobody loves",
                             cost: -2
                         },
                         {
                             name: "cego",
                             description: "namorada o traiu e ele nem viu",
                             cost: -3
                         }
                     ],
                     pericias: [
                         {
                             name: "Crime",
                             description: "Fez senai",
                             cost: 1
                         }
                     ]
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
