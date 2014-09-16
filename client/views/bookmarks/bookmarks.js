(function(){
  'use strict';

  angular.module('yummy')
  .controller('BookmarksCtrl', ['$scope', 'Category', 'Bookmark', function($scope, Category, Bookmark){
    $scope.category = {};
    $scope.categories = [];
    $scope.bookmarks = [];

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    Bookmark.all().then(function(response){
      $scope.bookmarks = response.data.bookmarks;
    });

    $scope.addCategory = function(){
      Category.create($scope.category).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.category = {};
      });
    };

    $scope.addBookmark = function(){
      Bookmark.create($scope.bookmark).then(function(response){
        $scope.bookmarks.push(response.data.bookmark);
        $scope.bookmark = {};
      });
    };
  }]);
})();
