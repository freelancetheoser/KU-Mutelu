<?php

namespace Database\Seeders;

use App\Models\Landmark;
use App\Models\User;
use App\Models\Wish;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Wish::factory(1)->create([
            'user_id' => User::inRandomOrder()->first()->id,
            'landmark_id' => Landmark::inRandomOrder()->first()->id,
            'content' => fake()->realText(),
            'offering_quantity' => 60,
            'template' => 'Paper'
        ]);

        Wish::factory(10)->create();
    }
}
