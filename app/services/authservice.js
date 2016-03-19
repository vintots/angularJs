// angular.module('ionicApp', [])

// .controller('MainCtrl', function($scope, $http) {
//  $http.get('https://cors-test.appspot.com/test').then(function(resp) {
//     console.log('Success', resp);
//     // For JSON responses, resp.data contains the result
//   }, function(err) {
//     console.error('ERR', err);
//     // err.status will contain the status code
//   })
// })
angular.module('myApp.authService', [])
.factory('Authenticate', function($q,getUsers){
    return {
        lists: function($scope){   ///dto sa scope na to pwde ka mag pasa ng anothre parameter hindi lng laging si $scope laman nian
        	 ///kapag gagamit ka ng promise laging angf result nia ay defer $q.defer
        	 var deferred = $q.defer();

        	 getUsers.all().then(function(success){   
                    // console.log(success);
        	 	var data =angular.copy(success);   ////ito ung result ng pag kuha ng data 
                // console.log(data);
        	 	deferred.resolve(data);

        	 },function(fail){
                deferred.reject('api error');
            });

            return deferred.promise;

        },
        sayGoodbye: function($scope){
            return "Factory says";
        }  
    }              
});