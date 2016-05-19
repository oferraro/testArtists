<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Artist;

class ArtistController extends Controller
{
    function index () {
        return response()->json(Artist::all());
    }
    
    function store (Request $request) {
        $input = $request->Input();
        if (!isset($input['artist']['name'])) {
            return response()->json(['status'=>200, 'data' => 'Datos incorrectos']);
        } else {
            if (isset($input['artist']['id'])) {
                $newArtist = Artist::find ($input['artist']['id']);
            } else {
                $newArtist = new Artist ();
            }
            $newArtist->name = $input['artist']['name'];
            $newArtist->last_name = isset($input['artist']['lastName'])?$input['artist']['lastName']:'';
            $newArtist->function = isset($input['artist']['function'])?$input['artist']['function']:'';
            if (!isset($input['artist']['id'])) {
                $newArtist->save();
            } else {
                $newArtist->update();
            }
            return response()->json(['status'=>200, 'data' => 'ok']);
        }
    }
    
    function create () {
        
    }
    
    function show () {
        
    }
    
    function update () {
        
    }
    
    function destroy () {
        
    }
    
    function edit () {
        
    }
    
}
