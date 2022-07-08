<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Product;
use App\Models\User;
use App\Models\Unit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Basic T-shirt/Short', 'slug' => 'basic-t-shirt'],
            ['name' => 'Streetwear T-shirt', 'slug' => 'streetwear-t-shirt'],
            ['name' => 'Pattern T-shirt/Short', 'slug' => 'pattern-t-shirt']
        ]);

        DB::table('sizes')->insert([
            ['name' => 's'],
            ['name' => 'm'],
            ['name' => 'l'],
            ['name' => 'xl'],
            ['name' => 'xxl']
        ]);

        DB::table('colors')->insert([
            ['name' => 'Vàng Mustard', 'value' => '#ffd32a'],
            ['name' => 'Hồng Cam', 'value' => '#ff197b'],
            ['name' => 'Xám', 'value' => '#757575'],
            ['name' => 'Xanh Dương', 'value' => '#3c40c6'],
            ['name' => 'Xanh lá', 'value' => '#0be881'],
            ['name' => 'Sen', 'value' => '#f53b57'],
            ['name' => 'Xanh biển', 'value' => '#0fbcf9'],
            ['name' => 'Đen', 'value' => '#000000'],
            ['name' => 'Trắng', 'value' => '#ffffff'],
            ['name' => 'Đỏ', 'value' => '#ff3f34'],
            ['name' => 'Tím khoai môn', 'value' => '#ce9dfd'],
            ['name' => 'Pure Apple', 'value' => '#6ab04c'],
            ['name' => 'Xanh tím than', 'value' => '#0c2461'],
            ['name' => 'Cam', 'value' => '#fa8231'],
            ['name' => 'Xanh lá mầm', 'value' => '#9bd8a5'],
            ['name' => 'Xanh Pastel', 'value' => '#d4f5fe'],
            ['name' => 'Vanila', 'value' => '#fff3cb'],
            ['name' => 'Tan', 'value' => '#eee1a8'],
            ['name' => 'Hồng Pastel', 'value' => '#ff9db4'],
            ['name' => 'Cam Đào', 'value' => '#ffa180']
        ]);

        Product::factory(30)
            ->has(Unit::factory(3)
                ->has(Image::factory(3)))
            ->create();

        DB::table('users')->insert([
            ['name' => 'Admin', 
            'email' => 'admin@example.com', 
            'password' => bcrypt('123456'),
            'is_admin' => true],
            ['name' => 'Guest', 
            'email' => 'guest@example.com', 
            'password' => bcrypt('123456'),
            'is_admin' => false],
        ]);

        User::factory(10)->create();
    }
}