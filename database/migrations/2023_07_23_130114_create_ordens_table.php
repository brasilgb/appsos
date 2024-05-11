<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ordens', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cliente_id')->nullable()->constrained()->onDelete('cascade');
            $table->string('equipamento', 40);
            $table->string('modelo', 50)->nullable();
            $table->string('senha', 50)->nullable();
            $table->text('defeito')->nullable();
            $table->string('estado', 100)->nullable();
            $table->text('acessorios')->nullable();
            $table->string('orcamento', 50)->nullable();
            $table->text('descorcamento')->nullable();
            $table->text('preorcamento')->nullable();
            $table->text('valorcamento')->nullable();
            $table->text('detalhes')->nullable(); // servicos executados
            $table->text('pecas')->nullable();
            $table->decimal('valpecas', 10, 2)->default(0);
            $table->decimal('valservico', 10, 2)->default(0);
            $table->decimal('custo', 10, 2)->default(0);
            $table->string('previsao')->nullable();
            $table->tinyInteger('status')->default('1');
            $table->dateTime('dtentrega')->nullable();
            $table->string('tecnico', 50)->nullable();
            $table->text('obs')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        }); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordens');
    }
};
