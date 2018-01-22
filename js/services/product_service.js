store.service("ProductService", ['CategoryService', function(CategoryService){

  var _products = {};

  var _murrayHelper = function(i){
    if (i < 10){
      return "0" + i
    } else {
      return i
    }
  };

  for(var i = 0; i < 20; i++){
    _products[i] = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      id: i,
      image: "http://fillmurray.com/3" + _murrayHelper(i) + "/400",
      description: faker.lorem.paragraph(),
      category: CategoryService.getRandom()
    }
  }

  this.find = function(id){
    return _products[id]
  }

  this.all = function(){
    return _products
  }

}]);