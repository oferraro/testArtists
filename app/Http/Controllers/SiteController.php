<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Album;

class SiteController extends Controller
{
    function Index () {
        return view ('index');
    }
    function getAlbums () {
        return response()->json(Album::all());
    }
    function addAlbums (Request $request) {
        $input = $request->Input();
        if (!isset($input['album']['date']) || is_null($input['album']['date']) || !isset($input['album']['name'])) {
            return response()->json(['status'=>200, 'data' => 'Datos incorrectos']);
        } else {
            if (isset($input['album']['id'])) {
                $newAlbum = Album::find ($input['album']['id']);
            } else {
                $newAlbum = new Album ();
            }
            $newAlbum->name = $input['album']['name'];
            $newAlbum->edition_date = $input['album']['date'];
            if (!isset($input['album']['id'])) {
                $newAlbum->save();
            } else {
                $newAlbum->update();
            }
            return response()->json(['status'=>200, 'data' => 'ok']);
        }
    }
    function getAlbum ($id) {
        $album = Album::find($id);
        return response()->json($album);
    }
    function deleteAlbum ($id) {
        $album = Album::find($id);
        $album->delete();
    }
}
