store.service("ShoppingCartService", [function(){

  var _cart = [];

  this.all = function(){
    return _cart
  }

  this.add = function(item, quantity){
    if(_cart.indexOf(item) === -1){
      item.quantity = quantity;
    _cart.push(item);
    } else {
      var _index = _cart.indexOf(item);
      var _item = _cart[_index];
      _item.quantity += quantity;
    }
  }

  this.remove = function(item){
    var _index = _cart.indexOf(item);
    _cart.splice(_index, 1);
  }

  this.count = function(){
    var _cartSize = 0;
    _cart.forEach(function(item){
      _cartSize += item.quantity;
    })
    return _cartSize
  }

}]);