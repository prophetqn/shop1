<template>
    <div class="product-content mb-[20px] col-span-3">
        <div class="title flex items-top justify-between mb-[50px]">
            <h1 class="text-24px font-[700]">{{ $route.meta.title }}</h1>
            <select class="text-14px text-gray-600 border-t-0 border-x-0 border-b-black pl-0 pr-[20px] py-0 cursor-pointer" v-model="selectedSort">
                <option v-for="(s, i) in sortOptions" :key="i" :value="s.value">{{ s.name }}</option>
            </select>
        </div>

        <div v-if="productList === undefined">
            <Loading />
        </div>
        <div v-else-if="productList.length" class="content-wrapper grid grid-cols-4 gap-[30px]">
            <ProductItem v-for="(p, i) in productList" :key="p.id" :product="p" itemWidth=" w-[227px]" itemHeight=" h-[227px]" />
        </div>
        <div v-else>
            <p class="mt-[10px] text-14px">Không tìm thấy sản phẩm nào phù hợp!</p>
            
        </div>
        
        <Pagination @click="getProductList(paginator.current_page, selectedSort, filters.checkedPrices, filters.checkedColors, filters.checkedSizes)" :paginator="paginator" />
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import Pagination from '../misc/Pagination.vue'
import Loading from '../misc/Loading.vue'

export default {
    components: { ProductItem, Pagination, Loading },
    props: {
        filters: Object
    },
    created() {
        this.getProductList(this.paginator.current_page, this.selectedSort, this.filters.checkedPrices, this.filters.checkedColors, this.filters.checkedSizes);
    },
    data() {
        return {
            productList: undefined,
            paginator: {
                current_page: 1,
                first_page: 1,
                last_page: 1,
                from: 1,
                to: 1,
                total: 1,
                per_page: 1
            },
            sortOptions: [
                {value:'exact_price-asc', name: 'Giá: Tăng dần'},
                {value:'exact_price-desc', name: 'Giá: Giảm dần'},
                {value:'name-asc', name: 'Tên: A-Z'},
                {value:'name-desc', name: 'Tên: Z-A'},
                {value:'created_at-asc', name: 'Cũ nhất'},
                {value:'created_at-desc', name: 'Mới nhất'},
                {value:'quantity_sold-desc', name: 'Bán chạy nhất'},
                {value:'quantity_stock-desc', name: 'Tồn kho: Giảm dần'}
            ],
            selectedSort: 'created_at-desc'
        }
    },
    watch: {
        $route(newRoute) {
            return newRoute.path.indexOf('collections') > -1 && this.getProductList(1, this.selectedSort, this.filters.checkedPrices, this.filters.checkedColors, this.filters.checkedSizes);
        },
        selectedSort() {
            return this.getProductList(1, this.selectedSort);
        },
        filters: {
            handler() {
                this.getProductList(1, this.selectedSort, this.filters.checkedPrices, this.filters.checkedColors, this.filters.checkedSizes);
            },
            deep: true
        }
    },
    methods: {
        async getProductList(page, sort = '', price = [], color = [], size = []) {
            try {
                const response = await axios.get(`/api${this.$route.path}`, {params: { 
                    page: page,
                    order: sort,
                    price: price.toString(),
                    color: color.toString(),
                    size: size.toString()
                }});
                this.productList = [...response.data.data];
                this.paginator = {...response.data};
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
</script>