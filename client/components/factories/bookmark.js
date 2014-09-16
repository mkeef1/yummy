(function(){
  'use strict';

  angular.module('yummy')
  .factory('Bookmark', ['$http', function($http){

    function all(){
      return $http.get('/bookmarks');
    }

    function create(bookmark){
      return $http.post('/bookmarks', bookmark);
    }

    return {all:all, create:create};
  }]);
})();

