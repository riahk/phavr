angular.module('drakeApp.login', [])
.controller('loginCtrl', function ($scope, $rootScope, $location, $cordovaOauth, Auth, $http, Nav){
    $rootScope.login = false;

  $scope.information = [$scope.username, $scope.password];
  $scope.letsGo = function(){
  	return $http({
      method: 'POST',
      url: '/login',
      data: $scope.information
    })
  };


 $scope.useBrowser = function() {
  //for browswer deployment use

        Auth.setAccessToken("CAAUhHz7c2VoBAHdARERGW4UkcUpCCmUnzf8oDLUyzWGlqZCKklFJa9sfwaqBkirZCsmbozPlpL0271S4NGrd76GpZACFMi6jDtcskXe85Sg46lLuyr6Yj1PtcWMi1q1xt02xGOX3IrZARMSUQaWHKNyWKORQp3u9ucNDSHFHEjHUhr8OcunU");
        $location.path('/home');

 }

  $scope.fbLogin = function() {
    /*return $http({
      method: 'GET',
      url: 'http://drakeapp.herokuapp.com/auth/facebook'
    })
    .success(function(data, status, headers, config) {
      console.log('success!');
      console.log('data', data);
      console.log('status', status);
      console.log('headers', headers);
      console.log('config', config);
    })
    .error(function(data, status, headers, config) {
      console.log('error!');
    });*/
    console.log('clicked!');
    console.log(Auth.clientID);
    $cordovaOauth.facebook(Auth.clientID, ['user_friends'])
      .then(function(result) {
        console.log('success!');
        console.log(result);


        //for android deployment use
        Auth.setAccessToken(result.access_token);
        


        //testing...
        $http.post('http://drakeapp.herokuapp.com/auth/facebook/token?access_token='+Auth.accessToken)
          .success(function(data){
            console.log(data);
            $location.path('/home');
          })
         .error(function(data){
            console.log('error!')
        });

      }, function(error) {
          alert("There was a problem getting your profile.  Check the logs for details.");
          console.log(error);
      });
        
  };

});

