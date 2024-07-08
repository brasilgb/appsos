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
        DROP PROCEDURE IF EXISTS `SP_EstoqueProduto`;
        CREATE PROCEDURE `SP_EstoqueProduto`(
            IN `SP_produto_id` INT(10),
            IN `SP_quantidade` INT(10))
            BEGIN declare contador int(10);
            select count(*) into contador from estoque_produtos where id = SP_produto_id;
            if contador > 0 then
            update estoque_produtos set id_produto = SP_produto, quantidade = quantidade + SP_quantidade where id = SP_produto_id;
            else
            insert into estoque_produtos ( produto_id, quantidade ) values( SP_produto_id, SP_quantidade );
            end if;
            END
            ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP PROCEDURE IF EXISTS `SP_EstoqueProduto`');
    }
};
