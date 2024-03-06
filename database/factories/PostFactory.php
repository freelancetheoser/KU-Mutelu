<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $content = substr($this->faker->text, 0, 30);
        $title = substr($this->faker->text, 0, 10);

        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => $title,
            'content' => $content,
            'image_post' => $this->faker->imageUrl(),
        ];
    }
}
