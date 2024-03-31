<?php

namespace Database\Seeders;

use App\Models\Offering;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfferingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $offerings = [
            ['name' => 'eggs', 'image_url' => 'images/offerings/eggs.png'],
            ['name' => 'fruit', 'image_url' => 'images/offerings/fruit.png'],
            ['name' => 'incense', 'image_url' => 'images/offerings/incense.png'],
            ['name' => 'lotus-flower', 'image_url' => 'images/offerings/lotus-flower.png'],
            ['name' => 'pig', 'image_url' => 'images/offerings/pig.png'],
            ['name' => 'pray', 'image_url' => 'images/offerings/pray.png'],
            ['name' => 'RedFanta', 'image_url' => 'images/offerings/RedFanta.png'],
            ['name' => 'roast-chicken', 'image_url' => 'images/offerings/roast-chicken.png'],
        ];

        foreach ($offerings as $offering) {
            Offering::create($offering);
        }
    }
}
