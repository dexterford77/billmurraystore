store.controller("ProductsIndexCtrl", ['$scope', 'ProductService', 'CategoryService', 'ShoppingCartService', function($scope, ProductService, CategoryService, ShoppingCartService){
  $scope.products = ProductService.all();
  $scope.categories = CategoryService.all();
  $scope.addToCart = function(item, quantity){
    ShoppingCartService.add(item, quantity);
  }
  $scope.myCart = ShoppingCartService.all();
  $scope.cartSize = ShoppingCartService.count;
}]);