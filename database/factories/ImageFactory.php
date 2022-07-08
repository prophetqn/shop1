<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $imageArr = [
            'https://product.hstatic.net/200000346037/product/less-monday-2_optimized_cfefc57dc07041b895a1a437e191fbd2_grande.png',
            'https://product.hstatic.net/200000346037/product/less-monday-6_optimized_ed50cd614f8b432da522b57d4f389b5d_master.png',
            'https://product.hstatic.net/200000346037/product/somi_bmo_e1ea15cbcc7548e88ef7388e57a6b04c_1024x1024.png',
            'https://product.hstatic.net/200000346037/product/tts0021-bl_de85091fe4194d9196b96c02948d4d8a_master.jpeg',
            'https://product.hstatic.net/200000346037/product/tts0004-wh_5e77515c6d18425dbcef575f6918edc4_master.jpeg',
            'https://product.hstatic.net/200000346037/product/bosua2_445ddf062972442088a7b7f223f3001e_1024x1024.jpeg',
            'https://product.hstatic.net/200000346037/product/perry_mockup_new_335d94cc5d714a798df21a6cf6bbc3ab_1024x1024.jpg',
            'https://product.hstatic.net/200000346037/product/tts00012_-_wh_7ab3666b58074ee69a66d4b6d63e8f17_master.png',
            'https://product.hstatic.net/200000346037/product/ts013_efde2cd69b9d49cba59f3c643fdf6165_master.jpeg',
            'https://product.hstatic.net/200000346037/product/4_ea499d8a3e354d10979d010f7020e09e_master.png'
        ];

        return [
            'src' => $this->faker->randomElement($imageArr),
        ];
    }
}
