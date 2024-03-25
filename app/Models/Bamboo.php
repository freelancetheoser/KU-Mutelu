<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bamboo extends Model
{
    use HasFactory;

    public function landmark()
    {
        return $this->belongsTo(Landmark::class);
    }
}
