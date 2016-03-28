//   }, function(err) {
//     console.error('ERR', err);
//     // err.status will contain the status code
//   })
// })
angular.module('myApp.getUsersService', [])
.factory('getUsers', function($q,ApiservicesUsers,validateUserLogin){

	function fetch_data(){
    // console.log('hurra');

          var deferred = $q.defer();

          var leaderboard = ApiservicesUsers.getResource('list=1',deferred).get({},{},function(response){
              // 
              if(leaderboard.users.length > 0){
                 deferred.resolve(leaderboard);
                 // console.log(leaderboard.users);
                //  current_user = login.response.data;
                //  current_user.tracking_session_id = login.response.tracking_session_id;
                 // $location.path('/tab/incidents');
               }else{
                 deferred.reject('api error');
               }
          });

          return deferred.promise;
    }

    function UserValidationApi(User){
      // console.log(User);
       ///use promise
       var deferred = $q.defer(); 
       var verify=validateUserLogin.getResource('validation=1&username='+User.username+'&password='+User.password,deferred).get({},{},function(response){
        if(verify.Validation.authorize){
          deferred.resolve(verify.Validation);
        }else{
          deferred.reject("Invalid");
        }
       },function(fail){
         deferred.reject('api error');
       });
       // var getData =
       return deferred.promise;
    }


    return {
        sayHello: function($scope){
            return "Factory says";
        },
        sayGoodbye: function($scope){
            return "Factory says";
        },
        all: function(){

        	return fetch_data();
        },

        validateUser : function(User){
          return UserValidationApi(User);
        }

    }              
});