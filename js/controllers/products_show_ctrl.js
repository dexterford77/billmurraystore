store.controller("ProductsShowCtrl", ['$scope', '$stateParams', 'ProductService', 'ShoppingCartService', function($scope, $stateParams, ProductService, ShoppingCartService){
  $scope.product = ProductService.find($stateParams.id);
  $scope.quantity = 1;
  $scope.addToCart = function(item, quantity){
    if(quantity > 0){
      ShoppingCartService.add(item, quantity);
    }
  }
}]);