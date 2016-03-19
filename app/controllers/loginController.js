angular.module('myApp.loginController', [])
.controller('MainController',function($state,$scope){

  
  
  // $scope.user=  [ 
  //                 {
  //                   username:'Marvin',
  //                   password:'Noche'
  //                 },
  //                 {
  //                   username:'Mommy',
  //                   password:'Kristel'
  //                 },
  //                 {
  //                   username:'Joseph',
  //                   password:'Salac'
  //                 }
  //         ]
  // console.log("adsadasda");
  // 	$scope.toActivationKey = function(){
  //   // console.log('toActivationKey');
  //   $state.go('app.activation');
  // }
  $scope.login=function($scope){
  	// console.log($scope.user.username);
  	// console.log($scope.user.password);
  	$state.go('homepage');
  }

   
});