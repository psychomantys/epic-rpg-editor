angular.module("bsb.informacoes", ["bsb.main"])
    .controller("InfoCtrl",["$scope", "CharacterService",
                            function($scope, CharacterService) {
                                $scope.character = CharacterService.getCharacter();
                            }]);
