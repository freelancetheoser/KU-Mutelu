<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Location;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('landmarks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Location::class);
            $table->string('name');
            $table->string('thai_name');
            $table->decimal('latitude', 15, 10);
            $table->decimal('longtitude', 15, 10);
            $table->string('image_url');
            $table->string('panorama_url');
            $table->text('detail')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('landmarks');
    }
};
