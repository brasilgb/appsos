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
        CREATE TRIGGER `TRG_delete_produto_ordem` AFTER DELETE ON `ordem_produto`
        FOR EACH ROW
        BEGIN
        CALL SP_EstoqueProduto (
            old.id,
            old.quantidade
                            );
        END
                    ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP TRIGGER `TRG_delete_produto_ordem');
    }
};
