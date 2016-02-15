angular.module('mean.home', [])
  .controller('HomeController', function($scope, $http){
   var init = function() {console.log('home controller up and going');};
   init();

   $scope.postIt = function() {
    return $http({
      method: 'POST',
      url: '/home'
    }).then(function(res){
      console.log('data from post?', res);
    }).catch(function(error) {
      console.log('error from post?', error);
    });
   };
  });