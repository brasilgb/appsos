<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $table = 'clientes';
    protected $fillable = [
        'id',
        'cpf',
        'nascimento',
        'nome',
        'email',
        'cep',
        'uf',
        'cidade',
        'bairro',
        'endereco',
        'complemento',
        'telefone',
        'whatsapp',
        'contato',
        'telcontato',
        'obs',
    ];

    public function ordens()
    {
        return $this->hasMany(Ordem::class);
    }
}
