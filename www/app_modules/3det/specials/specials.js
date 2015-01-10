angular.module("bsb.3det.specials", ["bsb.3det.main"])
    .factory("SpecialService", [
        function() {
            // Private

            // Public
            return {
            };
        }])
    .controller("VantagemCtrl", ["$scope", "CharacterService",
                                 function($scope, CharacterService) {
                                     $scope.page = {
                                         name: "Vantagem"
                                     };

                                     $scope.specials = CharacterService.getCharacter().vantagens;
                                 }])
    .controller("DesvantagemCtrl", ["$scope", "CharacterService",
                                    function($scope, CharacterService) {
                                        $scope.page = {
                                            name: "Desvantagem"
                                        };

                                        $scope.specials = CharacterService.getCharacter().desvantagens;
                                    }])
    .controller("PericiaCtrl", ["$scope", "CharacterService",
                                function($scope, CharacterService) {
                                    $scope.page = {
                                        name: "Pericia"
                                    };

                                    $scope.specials = CharacterService.getCharacter().pericias;
                                }]);
