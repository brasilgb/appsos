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
        Schema::create('estoque_produtos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('produto_id')->nullable()->constrained(table: 'produtos', indexName: 'estoque_produto_id')->onDelete('cascade');
            $table->integer("quantidade");
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('estoque_produtos');
    }
};
