angular.module("bsb.3det.informacoes", ["bsb.3det.main"])
    .controller("InfoCtrl",["$scope", "CharacterService",
                            function($scope, CharacterService) {
                                $scope.character = CharacterService.getCharacter();
                            }]);
