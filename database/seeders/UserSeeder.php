<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(1)->create([
            'username' => 'admin',
            'email' => 'admin@example.com',
            'zodiac' => '',
            'password' => 'adminpassword',
            'role' => 'ADMIN'
        ]);

        User::factory(1)->create([
            'username' => 'user',
            'email' => 'user@example.com',
            'zodiac' => '',
            'password' => 'password',
            'role' => 'USER'
        ]);

        User::factory(1)->create([
            'username' => 'Miami',
            'email' => 'mi@example.com',
            'image_profile' => './UserProfile/User-7.jpeg',
            'zodiac' => 'Aquarius',
            'bio' => 'มามูไปด้วยกันฮะะะะทุกคน',
            'password' => 'password',
            'role' => 'USER'
        ]);

        User::factory(10)->create();
    }
}
