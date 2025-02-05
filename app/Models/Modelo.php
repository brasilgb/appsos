<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    use HasFactory;

    protected $fillable = [
        'modelo',
        'marca_id'
    ];
    
    public function marca()
    {
        return $this->belongsTo(Marca::class);
    }
    
    public function servico()
    {
        return $this->belongsTo(Servico::class);
    }
    
}
