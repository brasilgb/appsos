<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordem extends Model
{
    use HasFactory;

    protected $table = 'ordens';

    protected $fillable = [
        'id',
        'cliente_id',
        'equipamento',
        'modelo',
        'senha',
        'defeito',
        'estado',
        'acessorios',
        'previsao',
        'descorcamento',
        'valorcamento',
        'pecas',
        'valpecas',
        'valservico',
        'custo',
        'status',
        'tecnico',
        'detalhes',
        'dtentrega',
        'obs'
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }

    public function produtos()
    {
        return $this->belongsToMany(Produto::class);
    }

}
