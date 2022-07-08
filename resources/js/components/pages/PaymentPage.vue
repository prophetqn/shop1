<template>
    <div class="grid grid-cols-11 font-sans_helv">
        <div class="col-span-6 pl-[205px] pr-[66px] py-[30px]">
            <router-link :to="{name: 'home'}">
                <h1 class="text-28px leading-[28px] uppercase">Tokago</h1>
            </router-link>
            <ul class="text-12px mt-[14px]">
                <li class="inline-block text-[#338dbc] ">
                    <router-link :to="{name: 'cart'}">Giỏ hàng</router-link>
                </li>
                <li class="inline-block text-[#338dbc] before:content-['>'] before:px-1 before:text-gray-300">
                    <router-link :to="{name: 'checkout'}">Thông tin giao hàng</router-link>
                </li>
                <li class="inline-block text-gray-500 before:content-['>'] before:px-1 before:text-gray-300">
                    Phương thức thanh toán
                </li>
            </ul>
            <h2 class="text-18px text-[#333333] tracking-wide mt-[14px] mb-[21px]">Phương thức vận chuyển</h2>

            <ul class="text-14px border border-gray-300 rounded-md overflow-auto">
                <li v-for="m in shippingMethods" :key="m.id" class="even:border-t even:border-gray-300">
                    <label :for="'shipping-method-' + m.id" class="p-[18px] flex justify-between items-center cursor-pointer">
                        <div>
                            <input type="radio" v-model="selectedShippingId" :id="'shipping-method-' + m.id" :value="m.id" />
                            <span class="pl-[10px] text-[#737373]">{{ m.name }}</span>
                        </div>
                        <span>{{ m.fee.toLocaleString('en-US') }}₫</span>
                    </label>
                </li>
            </ul>
            
            <h2 class="text-18px text-[#333333] tracking-wide mt-[14px] mb-[21px]">Phương thức thanh toán</h2>

            <ul class="text-14px border border-gray-300 rounded-md">
                <li v-for="m in paymentMethods" :key="m.id" class="even:border-t even:border-gray-300">
                    <label :for="'payment-method-' + m.id" class="p-[18px] flex items-center cursor-pointer">
                        <input type="radio" v-model="selectedPaymentId" :id="'payment-method-' + m.id" :value="m.id" />
                        <component class="inline-block w-8 h-8 ml-[10px]" :is="m.icon"></component>
                        <span class="pl-[10px] text-[#737373]">{{ m.name }}</span>
                    </label>
                    <div v-if="selectedPaymentId === m.id && m.note" class="p-[21px] text-center text-[#737373] bg-[#fafafa] border-t border-gray-300">
                        {{ m.note }}
                    </div>
                </li>
                
            </ul>

            <div class="mt-[21px]">
                <router-link class="block float-left text-14px text-[#338dbc] leading-[55px] hover:text-sky-500" :to="{name: 'payment'}">Quay lại thông tin giao hàng</router-link>
                <button type="submit" class="float-right relative h-[55px] leading-[55px] px-[30px] text-14px font-[500] text-white rounded-md bg-[#338dbc] hover:bg-sky-500">Hoàn tất đơn hàng</button>
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

            <form action="#" method="POST">
                <div class="grid grid-cols-4 gap-[10px] py-[21px] border-b border-gray-200">
                    <input type="text" name="name" placeholder="Mã giảm giá" class="col-span-3 w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]" />
                    <button type="submit" class="col-span-1 relative h-[45px] leading-[45px] text-14px font-[500] text-white rounded-md bg-[#c8c8c8] hover:bg-sky-500">Sử dụng</button>
                </div>
            </form>
            
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
export default {
    components: {CashIcon, CreditCardIcon},
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
            selectedPaymentId: 1
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