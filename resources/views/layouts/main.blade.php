<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Albums</title>

    <script src='assets/js/angular.min.js'></script>
    <script src='assets/js/angular-ui-router.min.js'></script>
    <script src='assets/js/config.js'></script>
    <script src='assets/js/controllers.js'></script>
    <link rel='stylesheet' type='text/css' href='assets/css/styles.css'>
    </head>
    
    <ul class="ul-menu">
        <li><a ui-sref="albums">Albums</a></li>
        <li><a onClick="newAlbum()">Nuevo Album</a></li>
        <li><a ui-sref="artists">Artistas</a></li>
        <li><a ui-sref="new-artist">Nuevo Artista</a></li>
    </ul>
    
    <body data-ng-app='mainApp'>
        @yield('content')
    </body>
</html>
