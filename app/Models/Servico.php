<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
    use HasFactory;

    protected $fillable = [
        'servico',
        'marca',
        'modelo',
        'descricao',
        'valor',
    ];
    public function marcas()
    {
        return $this->hasMany(Marca::class);
    }
    public function modelos()
    {
        return $this->hasMany(Modelo::class);
    }
}
