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
        Offering::create( [
            'name' => 'ไข่ไก่',
            'image_url' => './images/offerings/'
        ]);
    }
}
