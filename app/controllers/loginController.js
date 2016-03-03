angular.module('myApp.loginController', [])
.controller('MainController',function($state,$scope){
  // console.log("adsadasda");
  // 	$scope.toActivationKey = function(){
  //   // console.log('toActivationKey');
  //   $state.go('app.activation');
  // }
  $scope.login=function(){
  	console.log($scope.user.username);
  	console.log($scope.user.password);
  	$state.go('homepage');
  }

   
});