(function(){
    app.controller('welcomeCtrl', ['$scope','$http',function ($scope,$http) {
        $scope.someData = 'la data';
    }]);

    app.controller('albums', ['$location','configData','$scope','$http','$state', function ($location,configData,$scope,$http,$state) {
        $http({url:configData.url+configData.base_url+'api/albums', method: "GET",})
                .then(function(response, status) {
                $scope.albums = response.data;
        });

        getAlbum = function (id) {
            return $http({url:configData.url+configData.base_url+'api/album/'+id, method: "GET",});
        }

        var fisrt_path = $location.path().substr(0, $location.path().lastIndexOf("/")+1);
        var editAlbumID = $location.path().substr($location.path().lastIndexOf("/")+1, $location.path().length);
        if (fisrt_path == '/editar-album/') {
            $scope.editID = editAlbumID;
            getAlbum(editAlbumID).success(function (data){
                var albumData = { name: data.name, date: data.edition_date, id: data.id};
                $scope.album = albumData;
            });
        }
        
        callNewAlbum = function () {
            $state.go ('new-album');
        };
        $scope.addAlbum = function () {
            $http({url:configData.url+configData.base_url+'api/albums', method: "POST",
                data: JSON.stringify({
                    album: $scope.album
                }),                
            }).success(function(data) {
                if (data.data == 'ok') {
                    $state.go('albums');
                } else {
                    $scope.error = data.data;
                }
            });            
        };
        $scope.editAlbum = function (id) {
            $location.path('editar-album/'+id);
        };
        $scope.deleteAlbum = function (id) {
            $http({url:configData.url+configData.base_url+'api/album/delete/'+id, method: "POST"})
            .success(function(data) {
                $state.go('nuevo-album');
            });
        }
        callNewArtist = function () {
            $state.go('new-artist');
        }
    }]);

    app.controller('artists', ['configData','$scope','$http','$state', function (configData,$scope,$http,$state) {
        callNewAlbum = function () {
            $state.go('new-album');
        }
        $http({url:configData.url+configData.base_url+'api/artist', method: "GET",})
                .then(function(response, status) {
                $scope.artists = response.data;
        });
        callNewArtist = function () {
            $state.go('new-artist');
        }
        $scope.addArtist = function () {
            $http({url:configData.url+configData.base_url+'api/artist', method: "POST",
                data: JSON.stringify({
                    artist: $scope.artist
                }),                
            }).success(function(data) {
                if (data.data == 'ok') {
                    $state.go('artists');
                } else {
                    $scope.error = data.data;
                }
            });            
        };
    }]);
    
})();

function newAlbum () {
    callNewAlbum();
}
function newArtist () {
    callNewArtist();
}