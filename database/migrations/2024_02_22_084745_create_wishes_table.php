<?php

use App\Models\Landmark;
use App\Models\Offering;
use App\Models\User;
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
        Schema::create('wishes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdfor(User::class);
            $table->foreignIdfor(Landmark::class);
            $table->text('content');
            $table->string('image_wish')->nullable();
            $table->string('status')->default('waiting');
            $table->integer('offering_quantity')->default(0);
            $table->string('template')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wishes');
    }
};
