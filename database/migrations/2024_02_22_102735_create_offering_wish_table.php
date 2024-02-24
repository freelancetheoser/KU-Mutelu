<?php

use App\Models\Offering;
use App\Models\Wish;
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
        Schema::create('offering_wish', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Wish::class);
            $table->foreignIdFor(Offering::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offering_wish');
    }
};
