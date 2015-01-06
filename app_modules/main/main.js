angular.module("bsb.main", [])
    .controller("MainCtrl", ["$scope", "$state",
                              function($scope, $state) {
                                  $scope.tabs = [
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

                                  $scope.go = function(tab) {
                                      $state.go(tab.route);
                                  };

                                  $scope.status = {
                                      isopen: true
                                  };

                                  $scope.toggleMenu = function() {
                                      $scope.status.isopen = !$scope.status.isopen;
                                  };

                              }]);
