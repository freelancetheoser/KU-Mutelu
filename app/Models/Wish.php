<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wish extends Model
{
    use HasFactory;

    public function offerings(){
        return $this->belongsToMany(Offering::class);
    }

    public function landmark(){
        return $this->belongsTo(Landmark::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
