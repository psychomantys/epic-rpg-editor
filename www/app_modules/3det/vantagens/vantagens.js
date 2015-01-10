angular.module("bsb.3det.vantagens", ["bsb.3det.main"])
    .factory("VantagemService", [
        function() {
            // Private
            var vantagem = [
                {
                    name: "Teste",
                    description: "testeste"
                },
                {
                    name: "Teste2",
                    description: "tetete"
                }
            ];

            function getVantagens() {
                return vantagem;
            };

            // Public
            return {
                getVantagens: getVantagens
            };
        }])
    .controller("VantagemCtrl", ["$scope", "CharacterService",
                               function($scope, CharacterService) {
                                   $scope.character = CharacterService.getCharacter();
                               }]);
