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
        Schema::create('impressoes', function (Blueprint $table) {
            $table->id();
            $table->text('recebimento')->nullable();
            $table->text('entrega')->nullable();
            $table->text('orcamento')->nullable();
            $table->text('checkmobile')->nullable();
            $table->text('checkpc')->nullable();
            $table->text('checknote')->nullable();
            $table->text('checkoutros')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('impressoes');
    }
};
