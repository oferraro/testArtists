<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    function Albums () {
        return $this->hasMany('App\Artist');
    }
}
