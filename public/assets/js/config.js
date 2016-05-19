var app = angular.module('mainApp', ['ui.router']);

(function(){
    app.constant('configData', {
        url: window.location.origin,
        path: window.location.pathname,
        base_url: window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")+1)
    }).config(function(configData, $stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise ('/welcome-url'); // Default URL
    
        $stateProvider.state('welcome', {
            name: 'welcome',
            url:'/welcome-url',
            templateUrl: configData.base_url+'tpls/welcome.html',
            controller: 'welcomeCtrl',
        });
        
        $stateProvider.state('albums', {
            name: 'albums',
            url:'/albums',
            templateUrl: configData.base_url+'tpls/list-albums.html',
            controller: 'albums',
        });
        
        $stateProvider.state('new-album', {
            name: 'new-album',
            url:'/nuevo-album',
            templateUrl: configData.base_url+'tpls/new-album.html',
            controller: 'albums',
        });
        
        $stateProvider.state('edit-album', {
            name: 'edit-album',
            url:'/editar-album/{id}',
            templateUrl: configData.base_url+'tpls/new-album.html',
            controller: 'albums',
        });
        
        $stateProvider.state('artists', {
            name: 'artists',
            url:'/artistas',
            templateUrl: configData.base_url+'tpls/list-artists.html',
            controller: 'artists',
        });
        
        $stateProvider.state('new-artist', {
            name: 'new-artist',
            url:'/nuevo-artista',
            templateUrl: configData.base_url+'tpls/new-artist.html',
            controller: 'artists',
        });
        
    });

})();