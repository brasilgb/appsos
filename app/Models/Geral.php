<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Geral extends Model
{
    use HasFactory;

    protected $table = 'gerais';

    protected $fillable = [
        'bgimage',
        'bgcolor'
    ];
}
