<template>
    <div class="product-content mb-[20px] col-span-3">
        <div class="title flex items-top justify-between mb-[50px]">
            <h1 class="text-2xl font-bold">Tất cả sản phẩm</h1>
            <select class="text-tiny text-gray-600 border-t-0 border-x-0 border-b-black pl-0 pr-[20px] py-0 cursor-pointer">
                <option value="price-ascending" data-filter="&amp;sortby=(price:product=asc)">Giá: Tăng dần</option>
                <option value="price-descending" data-filter="&amp;sortby=(price:product=desc)">Giá: Giảm dần</option>
                <option value="title-ascending" data-filter="&amp;sortby=(title:product=asc)">Tên: A-Z</option>
                <option value="title-descending" data-filter="&amp;sortby=(price:product=desc)">Tên: Z-A</option>
                <option value="created-ascending" data-filter="&amp;sortby=(updated_at:product=desc)">Cũ nhất</option>
                <option value="created-descending" data-filter="&amp;sortby=(updated_at:product=asc)">Mới nhất</option>
                <option value="best-selling" data-filter="&amp;sortby=(sold_quantity:product=desc)">Bán chạy nhất</option>
                <option value="quantity-descending">Tồn kho: Giảm dần</option>
            </select>
        </div>

        <div class="content-wrapper grid grid-cols-4 gap-[30px]">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue';
</script>