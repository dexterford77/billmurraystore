var store = angular.module('store', ['ui.router']);

store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/products');
  $stateProvider.state('products', {
    url: "/products",
    abstract: true,
    template: "<div ui-view></div>"
  }).state('products.index', {
    url: "",
    templateUrl: "js/partials/products/index.html",
    controller: "ProductsIndexCtrl"
  }).state('products.show', {
    url: "/:id",
    templateUrl: "js/partials/products/show.html",
    controller: "ProductsShowCtrl"
  }).state('cart', {
    url: "/cart",
    templateUrl: "js/partials/cart.html",
    controller: "CartCtrl"
  });
});

// This is for error handling!
// It sets an event listener on the root scope & it outputs whatever loggable errors are happening when an error in ui-router states occurs
store.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});