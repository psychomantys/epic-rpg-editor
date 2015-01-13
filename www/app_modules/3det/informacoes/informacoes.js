angular.module("bsb.3det.informacoes", ["bsb.3det.main"])
    .controller("InfoCtrl",["$scope", "CharacterService",
                            function($scope, CharacterService) {
                                $scope.character = CharacterService.getCharacter();
                                $scope.character.strength.total = CharacterService.getStr();

                                for (i = 0; i < $scope.character.strength.modifiers.length; ++i) {
                                    if ($scope.character.strength.modifiers[i].active)
                                        $scope.character.strength.total = CharacterService.addStrModifier($scope.character.strength.total, $scope.character.strength.modifiers[i]);
                                }

                                $scope.addStrModifier = function(modifier) {
                                    $scope.character.strength.total = CharacterService.addStrModifier($scope.character.strength.total, modifier);
                                }
                            }]);
