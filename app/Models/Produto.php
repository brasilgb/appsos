<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $table = 'produtos';

    protected $fillable = [
        'codbarra',
        'descricao',
        'partnumber',
        'valcompra',
        'valvenda',
        'unidade',
        'quantidade',
        'estmaximo',
        'estminimo',
        'tipo',
    ];

    public function ordens()
    {
        return $this->belongsToMany(Ordem::class);
    }
}
