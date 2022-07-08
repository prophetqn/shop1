<template>
  <div class="category-filters mb-[20px] col-span-1">
    <ul class="category-list text-15px pb-[10px]">
        <li v-for="(p, i) in displayPaths" :key="i">
            <router-link :to="{name: p.name}">
                <span class="py-[5px] leading-7 tracking-wide">{{p.meta.title}}</span>
            </router-link>
        </li>
    </ul>

    <div @click="passFilters">
        <h4 @click="priceFilters.show = !priceFilters.show" class="flex text-13px font-[600] leading-[25px] uppercase py-[10px] cursor-pointer hover:text-red-500">
            Giá sản phẩm
            <MinusSmIcon v-if="priceFilters.show" class="inline-block h-3.5 w-3.5 mb-[6px] mt-auto ml-[2px]" />
            <PlusSmIcon v-if="!priceFilters.show" class="inline-block h-3.5 w-3.5 mb-[6px] mt-auto ml-[2px]" />
        </h4>
        <ul v-if="priceFilters.show" class="text-14px text-gray-600 mb-[10px]">
            <li v-for="(f, i) in priceFilters.list" :key="i" class="leading-[14px] mb-[5px] hover:text-red-500">
                <input class="cursor-pointer rounded-sm border-gray-200 hover:border-black h-[14px] w-[14px]" type="checkbox" :id="'price' + f.id" :value="f.value" v-model="filters.checkedPrices">
                <label class="pl-[8px] cursor-pointer" :for="'price' + f.id" >{{ f.name }}</label>   
            </li>
        </ul>
    </div>

    <div @click="passFilters">
        <h4 @click="colorFilters.show = !colorFilters.show" class="flex text-13px font-[600] leading-[25px] uppercase py-[10px] cursor-pointer hover:text-red-500">
            Màu sắc
            <MinusSmIcon v-if="colorFilters.show" class="inline-block h-3.5 w-3.5 mb-[6px] mt-auto ml-[2px]" />
            <PlusSmIcon v-if="!colorFilters.show" class="inline-block h-3.5 w-3.5 mb-[6px] mt-auto ml-[2px]" />
        </h4>
        <ul v-if="colorFilters.show" class="grid grid-cols-8 gap-[10px] w-[270px] mb-[10px]">
            <li v-for="(f, i) in colorFilters.list" :key="i" class="col-span-1">
                <label :for="'color' + f.id" class="block relative w-[23px] h-[23px] border-[1px] border-gray-200 cursor-pointer" :style="backgroundStyle(f.value)">
                    <input class="invisible peer" type="checkbox" :id="'color' + f.id" :value="f.id" v-model="filters.checkedColors">
                    <span class="hidden absolute w-max top-[-125%] left-1/2 translate-x-[-50%] px-[5px] peer-hover:block text-12px z-10 bg-white/90 rounded-md">{{f.name}}</span>
                    <CheckIcon v-if="filters.checkedColors.indexOf(f.id) > -1" class="absolute left-[3px] top-[3px] text-white w-4 h-4" />
                </label>
            </li>
        </ul>
    </div>

    <div @click="passFilters">
        <h4 @click="sizeFilters.show = !sizeFilters.show" class="flex text-13px font-[600] leading-[25px] uppercase py-[10px] cursor-pointer hover:text-red-500">
            Kích thước
            <MinusSmIcon v-if="sizeFilters.show" class="inline-block h-3.5 w-3.5 mb-[6px] mt-auto ml-[2px]" />
            <PlusSmIcon v-if="!sizeFilters.show" class="inline-block h-3.5 w-3.5 mb-[6px] mt-auto ml-[2px]" />
        </h4>
        <ul v-if="sizeFilters.show" class="size-list mb-[10px] text-gray-600">
            <li v-for="(f, i) in sizeFilters.list" :key="i" class="inline-block hover:text-red-500">
                <label class="block relative w-[42px] h-[42px] border border-gray-200 cursor-pointer" :for="'size' + f.id">
                    <input class="peer invisible" type="checkbox" :id="'size' + f.id" :value="f.id" v-model="filters.checkedSizes">
                    <span class="inline-block absolute left-[-1px] top-[-1px] peer-checked:bg-black leading-[42px] text-12px text-center peer-checked:text-white w-[42px] h-[42px]">{{ f.name }}</span>
                </label>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import { MinusSmIcon, PlusSmIcon, CheckIcon } from '@heroicons/vue/solid';
    export default {
        components: {MinusSmIcon, PlusSmIcon, CheckIcon},
        data() {
            return {
                priceFilters: {
                    show: true,
                    list: [
                        {id: 1, name: 'Dưới 100,000₫', value: '0,100000'}, 
                        {id: 2, name: '100,000₫ - 200,000₫', value: '100000,200000'},
                        {id: 3, name: '200,000₫ - 300,000₫', value: '200000,300000'},
                        {id: 4, name: '300,000₫ - 500,000₫', value: '300000,500000'},
                        {id: 5, name: 'Trên 500,000₫', value: '500000,999999999'}
                    ]
                },
                colorFilters: {
                    show: true,
                    list: []
                },
                sizeFilters: {
                    show: true,
                    list: []
                },
                filters: {
                    checkedPrices: [],
                    checkedColors: [],
                    checkedSizes: []
                }
            }
        },
        created() {
            this.getSizeData();
            this.getColorData();
        },
        computed: {
            displayPaths() {
                const DISPLAYMENU = 'collections';
                return this.$router.options.routes.find((r) => r.name === DISPLAYMENU).children;
            }
        },
        methods: {
            async getSizeData() {
                try {
                    const sizeResponse = await axios.get('/api/size');
                    this.sizeFilters.list = [...sizeResponse.data];
                } catch (error) {
                    console.log(error);
                }
            },
            async getColorData() {
                try {
                    const colorResponse = await axios.get('/api/color');
                    this.colorFilters.list = [...colorResponse.data];
                } catch (error) {
                    console.log(error);
                }
            },
            passFilters() {
                this.$emit('passFilters', this.filters);
            },
            backgroundStyle(color) {
                return {backgroundColor: color};
            }
        }
    }
</script>