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
        Location::create( [
            'name' => 'Bangkhen',
            'thai_name' => 'บางเขน',
            'latitude' => '13.84216970000',
            'longtitude' => '100.5730707000'
        ]);
        Location::create( [
            'name' => 'Kampansan',
            'thai_name' => 'บางเขน',
            'latitude' => '14.02041',
            'longtitude' => '99.97377'
        ]);
        Location::create( [
            'name' => 'Sriracha',
            'thai_name' => 'บางเขน',
            'latitude' => '13.12051',
            'longtitude' => '100.91900'
        ]);
        Location::create( [
            'name' => 'Bangkok',
            'thai_name' => 'กรุงเทพ',
            'latitude' => '13.75182',
            'longtitude' => '100.50130'
        ]);
        Location::create( [
            'name' => 'Taiwan',
            'thai_name' => 'ไต้หวัน',
            'latitude' => '13.84216970000',
            'longtitude' => '100.5730707000'
        ]);
    }
}
