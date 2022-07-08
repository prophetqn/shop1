<?php

namespace Database\Factories;

use App\Models\Color;
use App\Models\Size;
use App\Models\Unit;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Unit>
 */
class UnitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'sku' => trim($this->faker->unique()->text(8),'.'),
            'quantity_stock' => rand(1, 99),
            'quantity_sold' => rand(1, 99)
        ];
    }

    public function configure()
    {
        return $this->afterMaking(function (Unit $unit) {
            $unit->size()->associate(Size::all()->random());
            $unit->color()->associate(Color::all()->random());
        })->afterCreating(function (Unit $unit) {
            //
        });
    }
}
