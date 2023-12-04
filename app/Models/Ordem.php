<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordem extends Model
{
    use HasFactory;

    protected $table = 'ordens';

    protected $fillable = [
        'numordem',
        'cliente_id',
        'equipamento',
        'modelo',
        'senha',
        'defeito',
        'estado',
        'acessorios',
        'previsao',
        'orcamento',
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
        'observacoes'
    ];
    
    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
