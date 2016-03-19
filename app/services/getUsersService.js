//   }, function(err) {
//     console.error('ERR', err);
//     // err.status will contain the status code
//   })
// })
angular.module('myApp.getUsersService', [])
.factory('getUsers', function($q,ApiservicesUsers){

	function fetch_data(){
    // console.log('hurra');

          var deferred = $q.defer();

          var leaderboard = ApiservicesUsers.getResource('',deferred).get({},{},function(response){
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


    return {
        sayHello: function($scope){
            return "Factory says";
        },
        sayGoodbye: function($scope){
            return "Factory says";
        },
        all: function(){

        	return fetch_data();
        }

    }              
});