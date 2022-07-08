<template>
    <div class="product-block col-span-1">
        <router-link :class="'block relative' + itemWidth + itemHeight" :to="{ path: '/products/' + product.slug }">
            <img @load="onLoaded()" @mouseover="imgIndex = 1" @mouseleave="imgIndex = 0" :src="imgArr[imgIndex]" :alt="product.name" :key="imgIndex" class="w-full h-full object-cover duration-1000 ease-in" :class="loaded ? 'opacity-100' : 'opacity-0'" />
            <span v-if="product.exact_price < product.origin_price" class="absolute left-[10px] top-[10px] px-[10px] py-[5px] text-12px text-red-500 font-[700] leading-[10px] bg-white border border-gray-200 ">-{{ Math.round((1 - product.exact_price/product.origin_price)*100) }}%</span>
            <span v-if="!productAvailable()" class="absolute right-[10px] bottom-[10px] px-[10px] py-[5px] text-12px text-gray-500 font-[700] leading-[10px] bg-white border border-gray-200 ">Hết hàng</span>
        </router-link>

        <div class="box-pro-detail py-[20px]">
            <h3 class="mb-[5px] text-14px hover:text-red-500">
                <router-link :to="{ path: '/products/' + product.slug }">
                    {{ product.name.toUpperCase() }}
                </router-link>
            </h3>
            <p class="text-14px">
                <span class="text-red-500">{{ product.exact_price.toLocaleString('en-US') }} ₫</span>
                <span v-if="product.exact_price < product.origin_price" class="ml-[5px] text-gray-500 line-through">{{ product.origin_price.toLocaleString('en-US') }}₫</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            itemWidth: String,
            itemHeight: String,
            product: Object
        },
        data() {
            return {
                imgIndex: 0,
                imgArr: [],
                loaded: false
            }
        },
        created() {
            this.imageSearch();
        },
        methods: {
            productAvailable() {
                return this.product.units.reduce((sum, unit) => {return sum+= unit.quantity_stock}, 0);
            },
            imageSearch() {
                let notAvailableImage = '/images/image_not_available.jpg'
                for (let i = 0; i < this.product.units.length; i++) {
                    for (let j = 0; j < this.product.units[i].images.length; j++) {
                        if (this.imgArr.length < 2) {
                            this.imgArr.push(this.product.units[i].images[j].src);
                        } else {
                            return;
                        }
                    }
                }
                if (!this.imgArr.length) this.imgArr.push(notAvailableImage);
            },
            onLoaded() {
                this.loaded = true;
            }
        }
    }
</script>