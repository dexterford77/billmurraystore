store.filter('toArrayFilter', [
  function(){
    return function(objs){
      var toArray = [];
      for (var i in objs) {
        toArray.push(objs[i]);
      }
      return toArray
    };
  }
]);