(function(){
  'use strict';

  angular.module('yummy')
  .factory('Category', ['$http', function($http){

    function all(){
      return $http.get('/bookmarks');
    }

    function create(category){
      return $http.post('/bookmarks', category);
    }

    return {all:all, create:create};
  }]);
})();

