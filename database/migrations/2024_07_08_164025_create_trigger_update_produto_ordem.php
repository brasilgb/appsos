<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared('
        CREATE TRIGGER `TRG_update_produto_ordem` AFTER UPDATE ON `ordem_produto`
        FOR EACH ROW
        BEGIN
        CALL SP_EstoqueProduto (
            new.id,
            old.quantidade - new.quantidade
                            );
        END
                    ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trigger_update_produto_ordem');
    }
};
