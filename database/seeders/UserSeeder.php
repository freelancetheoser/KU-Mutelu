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

        User::factory(10)->create();
    }
}
