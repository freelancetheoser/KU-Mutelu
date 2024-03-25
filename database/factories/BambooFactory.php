<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bamboo>
 */
class BambooFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'position_x' => $this->faker->numberBetween(25, 35),
            'position_y' => $this->faker->numberBetween(-20, -15),
            'position_z' => $this->faker->numberBetween(-30, -10),
            'rotation_y' => 0.25,
        ];
    }
}
