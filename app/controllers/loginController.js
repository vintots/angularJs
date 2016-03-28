angular.module('myApp.loginController', [])
.controller('MainController',function($state,$scope,$rootScope,Authenticate,isLoggedIn){
var User ={ };
isLoggedIn.logRedir();
//initialize
isLoggedIn.initSess();

  
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
  $scope.login=function(){
  	// console.log($scope.user.username);
  	// console.log($scope.user.password);
    User ={
                'username' :$scope.user.username,
                'password' : $scope.user.password
    }
    // console.log(User);
      Authenticate.loginValidation(User).then(function(success){ 
      
      isLoggedIn.saveSession(User);
     $state.go('homepage');
    },function(fail){
      $scope.Invalid=true;
    })
    
  	// $state.go('homepage');
  }

   
});