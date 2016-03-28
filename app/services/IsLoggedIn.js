angular.module('myApp.isLogged',[])
 .factory('isLoggedIn',function($rootScope,$state){

 function initSession(){
   var UserSession={
 			'authUser' : false
 		}
 			$rootScope.uservalid=false;
 			$rootScope.username=false;
 			
 			return UserSession;
 		}



 	return {
 		initSess : function(){

 		return initSession();

 		},

 		saveSession :function(User){

 			$rootScope.uservalid=true;
 			$rootScope.username=User.username;
 		},
 		checkerSession: function(){
 			if($rootScope.uservalid==undefined){
 				$state.go('login');
 			}
 		},
 		logRedir : function(){
 			if($rootScope.uservalid){
 				$state.go('homepage');
 			}
 		},
 		userLogOut : function(){
 			return initSession();
 		}


 }
});


