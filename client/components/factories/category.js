(function(){
  'use strict';

  angular.module('yummy')
  .factory('Category', ['$http', function($http){

    function all(){
      return $http.get('/categories');
    }

    function create(category){
      return $http.post('/categories', category);
    }

    return {all:all, create:create};
  }]);
})();

