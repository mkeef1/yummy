(function(){
  'use strict';

  angular.module('yummy')
  .controller('BookmarksCtrl', ['$scope', 'Category', function($scope, Category){
    $scope.category = {};
    $scope.categories = [];

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    $scope.addCategory = function(){
      Category.create($scope.category).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.category = {};
      });
    };
  }]);
})();
