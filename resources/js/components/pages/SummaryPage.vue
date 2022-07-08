<template>
    <div class="grid grid-cols-11 font-sans_helv">
        <div class="col-span-6 pl-[205px] pr-[66px] py-[30px]">
            <router-link :to="{name: 'home'}">
                <h1 class="text-28px leading-[28px] uppercase">Tokago</h1>
            </router-link>
            
            <h2 class="text-21px text-[#333333] leading-tight mt-[14px]">Đặt hàng thành công</h2>

            <p class="text-14px text-[#737373] leading-tight">Mã đơn hàng #100806</p>
            <p class="text-14px text-[#333333] leading-tight">Cảm ơn bạn đã mua hàng!</p>

            <div class="border border-gray-300 rounded-md px-[8px] py-[11px] mt-[21px]">
                <h3 class="text-16px tracking-wide mb-[11px]">Thông tin đơn hàng</h3>
                <h4 class="text-14px text-[#333333] tracking-wide mt-[14px] mb-[10px]">Thông tin giao hàng</h4>
                <p class="text-14px text-[#737373]" v-for="(v, k) in contactInfo" :key="k">{{ v }}</p>
                <h4 class="text-14px text-[#333333] tracking-wide mt-[21px] mb-[10px]">Phương thức thanh toán</h4>
                <p class="text-14px text-[#737373]">{{ shippingMethods.find((e) => e.id === selectedShippingId).name }}</p>
            </div>

            <div class="mt-[21px] flex justify-between">
                <div>
                    <QuestionMarkCircleIcon class="inline-block w-[22px] h-[22px] mr-[5px] text-[#737373]" />
                    <span class="text-14px text-[#737373]">Cần hỗ trợ? </span>
                    <router-link class=" text-14px text-[#338dbc] leading-[55px] hover:text-sky-500" :to="{name: 'payment'}">Liên hệ chúng tôi</router-link>
                </div>
                
                <button type="submit" class="inline-block relative h-[55px] w-fit leading-[55px] px-[30px] text-14px font-[500] text-white rounded-md bg-[#338dbc] hover:bg-sky-500">Tiếp tục mua hàng</button>
            </div>
        </div>

        <div class="col-span-5 bg-[#fafafa] pr-[205px] pl-[44px] py-[30px] border-l border-gray-300">
            <ul class="border-b border-gray-200 pb-[10px]">
                <li v-for="(item, i) in cartItems" :key="i" >
                    <div class="grid grid-cols-6 gap-[5px] py-[10px] items-center">
                        <div class="col-span-1 relative">
                            <span class="absolute top-[-11px] right-[-6px] h-[22px] w-[22px] text-white text-12px leading-[22px] text-center bg-[#999999] rounded-full">{{ item.quantity }}</span>
                            <img class="h-[64px] w-[64px] object-contain bg-white border border-gray-200 rounded-md" :src="item.imgSrc" :alt="item.name">
                        </div>
                        <div class="col-span-4">
                            <h4 class="text-14px text-[#4b4b4b] font-medium hover:text-red-500">
                                <router-link :to="{ name: 'products', params: { slug: item.slug } }">
                                    {{ item.name }}
                                </router-link>
                            </h4>
                            <p class="text-12px text-[#969696]">{{ item.color && item.color + '/' }}{{ item.size }}</p>
                        </div>
                        <div class="col-span-1 h-full flex flex-col justify-center">
                            <p class="text-14px text-[#4b4b4b] font-medium text-right">{{ (item.quantity*item.price).toLocaleString('en-US') }}₫</p>
                        </div>
                    </div>
                </li>
            </ul>
            
            <div class="py-[21px] border-b border-gray-200 text-14px">
                <div class="overflow-auto mb-[10px]">
                    <p class="float-left text-[#717171]">Tạm tính</p>
                    <p class="float-right text-[#4b4b4b]">{{ totalPrice().toLocaleString('en-US') }}₫</p>
                </div>
                <div class="overflow-auto">
                    <p class="float-left text-[#717171]">Phí vận chuyển</p>
                    <p class="float-right text-[#4b4b4b]">{{ shippingFee() ? shippingFee().toLocaleString('en-US')+'₫' : 'Miễn phí' }}</p>
                </div>
            </div>

            <div class="overflow-auto mb-[10px] py-[21px] leading-[24px]">
                <p class="float-left text-16px text-[#717171]">Tổng cộng</p>
                <p class="float-right">
                    <span class="pr-[10px] text-13px text-[#969696]">VND</span>
                    <span class="text-24px text-[#4b4b4b]">{{ (totalPrice() + shippingFee()).toLocaleString('en-US') }}₫</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import { CashIcon, CreditCardIcon } from '@heroicons/vue/outline'
import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'
export default {
    components: {CashIcon, CreditCardIcon, QuestionMarkCircleIcon},
    data() {
        return {
            provinceData: [],
            districtData: [],
            wardData: [],
            customerProvince: 'null',
            customerDistrict: 'null',
            customerWard: 'null',
            cartItems: [
                {
                    name: 'LESS MONDAY TIE-DYE T-SHIRT',
                    slug: 'less-monday-wash-t-shirt',
                    price: 189000,
                    beforeSalePrice: 249000,
                    color: 'Xám Tie - Dye',
                    size: 'M',
                    quantity: 1,
                    imgSrc: 'https://product.hstatic.net/200000346037/product/less-monday-6_optimized_ed50cd614f8b432da522b57d4f389b5d_medium.png'
                },
                {
                    name: 'Quần Japan Tokago New 2022',
                    slug: 'quan-japan-tokago-new-2022',
                    price: 169000,
                    beforeSalePrice: 249000,
                    color: '',
                    size: 'M',
                    quantity: 2,
                    imgSrc: 'https://product.hstatic.net/200000346037/product/new8_fe162d9b605b4aac9c2704cff1a3f690_medium.png'
                }
            ],
            shippingMethods: [
                {id: 1, name: 'FREESHIP ĐƠN HÀNG TỪ 300K', fee: 0},
                {id: 2, name: 'Giao hàng tận nơi', fee: 35000}
            ],
            selectedShippingId: 2,
            paymentMethods: [
                {id: 1, name: 'Thanh toán khi giao hàng', icon: CashIcon, note: ''},
                {id: 2, name: 'Chuyển khoản qua ngân hàng', icon: CreditCardIcon, note: 'Cậu chuyển khoản cho chúng tớ theo thông tin sau nha:...'}
            ],
            selectedPaymentId: 1,
            contactInfo: {
                name: 'John Doe',
                tel: 845362135,
                email: 'johndoe@example.com',
                address: '08 Unknown Road',
                ward: 'Ward 8',
                district: 'District 8',
                province: 'Province 8',
                country: 'Vietnam'
            }
        }
    },
    mounted() {
        this.getProvinceData()
    },
    watch: {
        customerProvince: 'getDistrictData',
        customerDistrict: 'getWardData'
    },
    methods: {
        async getProvinceData() {
            try {
                const response = await axios.get('province-data.json');
                this.provinceData = response.data;
            } catch(error) {
                this.error = error.response.data;
            }
        },
        getDistrictData() {
            this.districtData = this.provinceData.find((e) => e.Name === this.customerProvince).Districts;
        },
        getWardData() {
            this.wardData = this.districtData.find((e) => e.Name === this.customerDistrict).Wards;
        },
        totalPrice() {
            return this.cartItems.reduce(((total, item) => total += item.quantity * item.price), 0);
        },
        shippingFee() {
            return this.shippingMethods.find((e) => e.id === this.selectedShippingId).fee;
        },
    }
}

</script>