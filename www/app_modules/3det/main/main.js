angular.module("bsb.3det.main", ["ui.router"])
    .factory("CharacterService",[
             function() {
                 // Private
                 var character = {
                     name: "Teste",
                     strength: {
                         base: 2,
                         types: [
                             {
                                 name: "Corte",
                                 note: "Garras"
                             },
                             {
                                 name: "Perfuração",
                                 note: "Mordida"
                             }
                         ],
                         modifiers: [
                             {
                                 value: 2,
                                 note: "Quando o personagem do bal ta perto",
                                 active: true
                             },
                             {
                                 value: 1,
                                 note: "teste",
                                 active: true
                             }
                         ]
                     },
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

                 function getStr() {
                     return character.strength.base;
                 };

                 function addStrModifier(str, modifier) {
                     console.log(modifier.active);
                     var total;
                     if (modifier.active) {
                         total = str + modifier.value;
                     } else {
                         total = str - modifier.value;
                     }

                     return total;
                 };

                 // Public
                 return {
                     getCharacter : getCharacter,
                     addStrModifier : addStrModifier,
                     getStr : getStr
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
