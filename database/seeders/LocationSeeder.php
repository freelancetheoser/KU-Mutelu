<?php

namespace Database\Seeders;

use App\Models\Location;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Location::create([
            'name' => 'sambhuraphajan',
            'thai_name' => 'สามบูรพาจารย์',
            'latitude' => '13.8421697',
            'longtitude' => '100.5730707',
            'image_url' => './images/locations/sambhuraphajan',
            'locate' => 'Bangkhen'
        ]);
        Location::create( [
            'name' => 'phrapirun',
            'thai_name' => 'พระพิรุณ',
            'latitude' => '13.8409383',
            'longtitude' => '100.5754932',
            'image_url' => './images/locations/phrapirun',
            'locate' => 'Bangkhen' 
        ]);
        Location::create( [
            'name' => 'sanchaomaepatcharee',
            'thai_name' => 'ศาลเจ้าแม่พัชรี',
            'latitude' => '13.8501328',
            'longtitude' => '100.5663824',
            'image_url' => './images/locations/sanchaomaepatcharee',
            'locate' => 'Bangkhen' 
        ]);
    }
}
