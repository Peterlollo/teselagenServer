
// Rename main module and require more as needed
angular.module('mean', ['mean.home', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    //Set up Appropriate routes here
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      });
      //Require and add $httpProvider interceptor here if needed
  }]);
  //Add authorization checks here if needed