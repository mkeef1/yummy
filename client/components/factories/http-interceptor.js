(function(){
  'use strict';

  angular.module('yummy')
  .factory('HttpInterceptor', ['$rootScope', '$q', '$location', function($rootScope, $q, $location){

    function responseError(res){
      if(res.status === 401){
        $location.path('/login');
      }

      return $q.reject(res);
    }

    function response(res){
      var email = res.headers('x-authenticated-user');
      if(email){
        $rootScope.$broadcast('authenticated', email);
      }
      return res;
    }


    return {response:response, responseError:responseError};
  }]);
})();

