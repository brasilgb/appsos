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
        Schema::create('mensagens', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('remetente');
            $table->foreign('remetente')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('destinatario');
            $table->foreign('destinatario')->references('id')->on('users')->onDelete('cascade');
            $table->text('mensagem');
            $table->tinyInteger('status')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mensagens');
    }
};
