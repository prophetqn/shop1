<template>
    <div>
        <div class="">
            <router-link :to="{ name: 'collections' }">
                <img class="h-auto w-full m-auto" src="/images/big_banner.png" alt="">
            </router-link>
        </div>
       
        <div class="px-[85px] mb-[50px]">
            <h2 class="py-[50px] text-37px font-[700] text-center">
                <router-link :to="{ name: 'collections' }" class="hover:text-red-500">New Arrival</router-link>
            </h2>
            <div class="content-wrapper grid grid-cols-4 gap-[30px]">
                <ProductItem v-for="(p, i) in productList.newArrival" :key="p.id" :product="p" itemWidth=" w-[313px]" itemHeight=" h-[313px]" />
            </div>
            <h2 class="py-[50px] text-37px font-[700] text-center">
                <router-link :to="{ name: 'collections' }" class="hover:text-red-500">Best Seller</router-link>
            </h2>
            <div class="content-wrapper grid grid-cols-4 gap-[30px]">
                <ProductItem v-for="(p, i) in productList.bestSeller" :key="p.id" :product="p" itemWidth=" w-[313px]" itemHeight=" h-[313px]" />
            </div>
        </div>

        <div class="flex flex-row">
            <div class="flex-none w-[727px] relative">
                <div class="h-full flex items-center ">
                    <div class="px-[85px]">
                        <h2 class="text-54px font-[700] text-white mb-[65px]">Về chúng tôi</h2>
                        <router-link :to="{name: 'about'}">
                            <span class="transition-button-white relative px-[28px] py-[10px] text-12px uppercase tracking-[1px] border border-white bg-transparent hover:text-white">Xem ngay</span> 
                        </router-link>
                    </div>
                </div>
                <div class="background-black-opa40">
                        <img class="absolute top-0 left-0 w-full h-full object-cover -z-10" src="/images/bot_banner.png" alt="Về chúng tôi">
                </div>
            </div>
            <div class="flex-initial py-[100px] pl-[85px] pr-[170px] text-15px leading-[21px] text-justify font-[500] text-black bg-tokago-gray">
                <p class="mb-[10px]">TOKAGO - <span class="text-red-500">ストリートウェア</span> - Since 2021.</p>
                <p class="mb-[10px]">TOKAGO xuất hiện với "sứ mệnh" đem những sản phẩm "xịn xò" và chất lượng đến các cậu. Tất cả sản phẩm đều được chúng tớ tự thiết kế và sản xuất bằng cả tình yêu và đam mê.</p>
                <p class="mb-[10px]">Dù các cậu là ai, nam hay nữ, mập hay ốm, bao nhiêu tuổi,...thì cậu đều có thể tìm được những sản phẩm phù hợp với chính mình tại TOKAGO!</p>
                <br>
                <p class="mb-[10px] text-red-500 font-[700]">LIÊN HỆ VỚI CHÚNG TỚ:</p>
                <p class="mb-[10px]"><b>Văn phòng: </b>Số 3, ngõ 120 Trường Chinh, Đống Đa, Hà Nội</p>
                <p class="mb-[10px]"><strong>Website: </strong><a to="/">https://tokago.vn/</a></p>
                <p class="mb-[10px]"><strong>Fanpage: </strong><a href="https://www.facebook.com/tokago.vn/">https://www.facebook.com/tokago.vn</a></p>
                <p class="mb-[10px]"><strong>Instagram: </strong><a href="https://www.instagram.com/tokago.official/">https://www.instagram.com/tokago.vn/</a></p>
                <p class="mb-[10px]"><strong>Shopee: </strong><a href="https://shopee.vn/quanhoathinh">https://shopee.vn/quanhoathinh</a></p>
                <p class="mb-[10px]">HOTLINE: 096.529.0096</p>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '../product/ProductItem.vue';
export default {
    components: {
        ProductItem
    },
    created() {
        this.getProductList()
    },
    data() {
        return {
            productList: {}
        }
    },
    methods: {
        async getProductList() {
            try {
                const response = await axios.get('/api/homepage');
                this.productList = {...response.data};
                for (let key in this.productList) {
                    this.productList[key].map((product) => product.show = true);
                }
            }
            catch (error) {
                console.log(error);
            }
        },
    }
}
</script>