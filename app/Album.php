<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    function Artists () {
        return $this->belongsTo('App\Album');
    }
}
