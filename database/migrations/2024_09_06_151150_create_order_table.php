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
        Schema::create('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->unique()->index();
            $table->string('cliente_id')->nullable();
            $table->string('detalhes')->nullable();
            $table->string('defeito')->nullable();
            $table->text('descorcamento')->nullable();
            $table->decimal('valorcamento', 15,2)->nullable();
            $table->decimal('custo', 15,2)->nullable();
            $table->decimal('valservico', 15,2)->nullable();
            $table->decimal('valpecas', 15,2)->nullable();
            $table->string('status')->nullable();
            $table->dateTime('dtentrada')->nullable();
            $table->dateTime('dtentrega')->nullable();
            $table->timestamps();
        });
    }

    /**
     *
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};