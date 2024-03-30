<?php

use App\Models\Landmark;
use App\Models\Offering;
use App\Models\User;
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
        Schema::create('wishes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdfor(User::class);
            $table->foreignIdfor(Landmark::class);
            $table->text('content');
            $table->string('image_wish')->nullable();
            $table->string('status')->default('รอแก้บน');
            $table->integer('offering_quantity')->default(0);
            $table->string('template')->nullable();
            $table->timestamps();
        });

        DB::unprepared('
            CREATE TRIGGER update_wish_status BEFORE INSERT ON wishes
            FOR EACH ROW
            BEGIN
                IF NEW.offering_quantity > 0 THEN
                    SET NEW.status = \'แก้บนแล้ว\';
                END IF;
            END;
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wishes');
    }
};
