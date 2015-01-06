angular.module("bsb.3det", ["bsb.main", "ui.bootstrap"])
    .directive("myMenu",
               function() {
                   return {
                       templateUrl: "app_modules/diretivas/menu.html",
                       restrict: "E"
                   };
               }
              );
