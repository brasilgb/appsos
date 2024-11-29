<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cliente>
 */
class ClienteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // protected $model = Cliente::class;
    
    public function definition(): array
    {
        return [
            'cpf' => $this->faker->numerify('###########'),
            'nascimento' => $this->faker->date(),
            'nome' => $this->faker->firstName(),
            'email' => $this->faker->email(),
            'cep' => $this->faker->numerify('########'),
            'uf' => $this->faker->state,
            'cidade' => 'RS',
            'bairro' => 'bairro',
            'endereco' => $this->faker->address(),
            'complemento' => 'casa',
            'telefone' => $this->faker->phoneNumber(),
            'contato' => $this->faker->name(),
            'telcontato' => $this->faker->phoneNumber(),
            'obs' => $this->faker->text(),
        ];
    }
}
