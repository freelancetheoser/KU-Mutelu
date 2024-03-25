<?php

namespace Database\Seeders;

use App\Models\Bamboo;
use App\Models\Landmark;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BambooSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (Landmark::all() as $landmark) {
            // fake 3-5 bamboos for each landmark
            Bamboo::factory()->count(rand(3, 5))->create([
                'landmark_id' => $landmark->id,
            ]);
        }
    }
}
