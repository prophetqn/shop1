<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $orgPrice = rand(1, 2000) * 1000;
        
        return [
            'category_id' => rand(1, DB::table('categories')->count()),
            'name' => trim($this->faker->text(12),'.'),
            'slug' => $this->faker->unique()->slug(),
            'description' => $this->faker->paragraph(3),
            'exact_price' => ceil($orgPrice*rand(30, 100)/100/1000)*1000,
            'origin_price' => $orgPrice,
        ];
    }
}
