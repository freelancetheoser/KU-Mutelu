<?php

use App\Models\Landmark;
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
        Schema::create('bamboos', function (Blueprint $table) {
            $table->id();
            $table->ForeignIdFor(Landmark::class);
            $table->tinyInteger('position_x');
            $table->tinyInteger('position_y');
            $table->tinyInteger('position_z');
            $table->tinyInteger('rotation_y');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bamboos');
    }
};
