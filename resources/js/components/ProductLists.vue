
<template>
    <div class="bg-white">
        <div class="">
            <img class="h-auto w-full m-auto" src="/images/mockup.webp" alt="">
        </div>
        <div class="main-content">
            <div class="content-wrapper px-[85px] pt-[50px] grid grid-cols-4">
                <CategoryFilters />
                <ProductContent />
            </div>
        </div>
    </div>
</template>

<script setup>
import CategoryFilters from './CategoryFilters.vue';
import ProductContent from './ProductContent.vue';

const products = 
    [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$40',
            color: 'Blue',
        },
        {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$40',
            color: 'Blue',
        },
        {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$40',
            color: 'Blue',
        },
        {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$40',
            color: 'Blue',
        },
        {
            id: 6,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$40',
            color: 'Blue',
        },
    ]
</script>
