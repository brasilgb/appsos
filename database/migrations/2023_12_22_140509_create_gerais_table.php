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
        Schema::create('gerais', function (Blueprint $table) {
            $table->id();
            $table->text('bgimage')->nullable();
            $table->string('bgcolor')->nullable();
            $table->string('equtipo')->nullable();
            $table->string('equestado')->nullable();
            $table->string('servicos')->nullable();
            $table->string('marcas')->nullable();
            $table->string('modelos')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gerais');
    }
};
