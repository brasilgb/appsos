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
        Schema::create('ordem_produto', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ordem_id')->nullable()->constrained(table: 'ordens', indexName: 'col_ordem_id')->onDelete('cascade');
            $table->foreignId('produto_id')->nullable()->constrained(table: 'produtos', indexName: 'col_produto_id')->onDelete('cascade');
            $table->integer('quantidade');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordem_produto');
    }
};
