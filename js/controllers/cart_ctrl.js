store.controller("CartCtrl", ['$scope', 'ShoppingCartService', function($scope, ShoppingCartService){
  $scope.cartSize = ShoppingCartService.count;
  $scope.items = ShoppingCartService.all();
  $scope.remove = function(item){
    ShoppingCartService.remove(item);
  }
}]);