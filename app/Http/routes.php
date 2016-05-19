<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'SiteController@Index');

Route::group (['prefix'=>'api'], function () {
    Route::get('/albums', 'SiteController@getAlbums');
    Route::post('/albums', 'SiteController@addAlbums');
    Route::get('/album/{id}', 'SiteController@getAlbum');
    Route::post('/album/delete/{id}', 'SiteController@deleteAlbum');
    
    Route::resource('artist', 'ArtistController');
});