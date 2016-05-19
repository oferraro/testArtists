

Create the table: albums_test

copy .env.example to .env and add configuration data (mysql connection, smtp, etc)


Install composer if it's not installed

composer install

run:
php artisan migrate


chgrp www-data storage/ -R

find storage -type d -exec chmod g+rwx {} \;

find storage -type f -exec chmod g+rw {} \;

asumo que:
Cada artista puede pertener a una banda 
(si perteneciera a mas, habría que crear una tabla intermedia en la base para relacionar muchos con muchas bandas)

Para cambiar:
Con mas tiempo haría un refactoring usando route::resource en vez de get y post (para artistas use resource)
Otro cambio que haría es agregar diseño con Bootstrap
Tambien vería la opción de usar resource en Angular
