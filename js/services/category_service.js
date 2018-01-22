store.service("CategoryService", [function(){

  var _categories = {};

  for(var i = 0; i < 4; i++){
    _categories[i] = {
      name: faker.commerce.department(),
      id: i
    }
  }

  this.getRandom = function(){
    return _categories[Math.floor(Math.random() * 4)]
  }

  this.all = function(){
    return _categories
  }

}]);