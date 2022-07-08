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
                <li class="inline-block before:content-['>'] before:px-1 before:text-gray-300">
                    Thông tin giao hàng
                </li>
                <li class="inline-block text-gray-500 before:content-['>'] before:px-1 before:text-gray-300">
                    Phương thức thanh toán
                </li>
            </ul>
            <h2 class="text-18px text-[#333333] tracking-wide mt-[14px] mb-[21px]">Thông tin giao hàng</h2>
            <div v-if="!authenticated" class="text-14px">  
                <p class="inline-block text-[#737373]">Bạn đã có tài khoản? </p>
                <router-link :to="{name: 'login'}" class="inline-block text-[#338dbc] ml-[5px]">Đăng nhập</router-link>
            </div>
            
            <form @submit.prevent="$router.push({name: 'payment'})" method="POST">
                <div class="">
                    <div class="grid grid-cols-3 gap-x-[10px]">
                        <div class="col-span-3 my-[6px]">
                            <input type="text" placeholder="Họ và tên" :value="orderInfo.name" @input="updateOrderInfo('name', $event)" autocomplete="on" required class="block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]" />
                        </div>
                        <div class="col-span-2 my-[6px]">
                            <input type="email" placeholder="Email" :value="orderInfo.email" @input="updateOrderInfo('email', $event)" autocomplete="on" required class="block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]" />
                        </div>
                        <div class="col-span-1 my-[6px]">
                            <input type="tel" min="10" placeholder="Số điện thoại" :value="orderInfo.phone" @input="updateOrderInfo('phone', $event)" autocomplete="on" required class="block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]" />
                        </div>
                        <div class="col-span-3 my-[6px]">
                            <input type="text" placeholder="Địa chỉ" :value="orderInfo.address" @input="updateOrderInfo('address', $event)" autocomplete="on" required class="block w-full h-[45px] text-14px border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 pl-[10px] pr-[40px]" />
                        </div>
                        <div class="relative col-span-1 my-[6px] before:content-['|'] before:text-[16px] before:absolute before:right-8 before:top-[10px] before:text-gray-200">
                            <label class="absolute top-[5px] left-[10px] text-12px text-[#737373]">Tỉnh / thành</label>
                            <select required class="pl-[10px] pr-[40px] pt-[21px] w-full border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-14px text-clip leading-none" @input="updateOrderInfo('province', $event)">
                                <option value="">Chọn tỉnh / thành</option>
                                <option v-for="province in provinceData" :key="province.ProvinceID" :value="province.ProvinceName" >{{ province.ProvinceName }}</option>
                            </select>
                        </div>
                        <div class="relative col-span-1 my-[6px] before:content-['|'] before:absolute before:right-8 before:top-[10px] before:text-gray-200">
                            <label class="absolute top-[5px] left-[10px] text-12px text-[#737373]">Quận / huyện</label>                           
                            <select required class="pl-[10px] pr-[40px] pt-[21px] w-full border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-14px text-clip leading-none" @input="updateOrderInfo('district', $event)">
                                <option value="">Chọn quận / huyện</option>
                                <option v-for="district in districtData" :key="district.DistrictID" :value="district.DistrictName" >{{ district.DistrictName }}</option>
                            </select>
                        </div>
                        <div class="relative col-span-1 my-[6px] before:content-['|'] before:absolute before:right-8 before:top-[10px] before:text-gray-200">
                            <label class="absolute top-[5px] left-[10px] text-12px text-[#737373]">Phường / xã</label>
                            <select required class="pl-[10px] pr-[40px] pt-[21px] w-full border-gray-300 rounded-md focus:ring-blue-400 focus:border-blue-400 text-14px text-clip leading-none" @input="updateOrderInfo('ward', $event)">
                                <option value="">Chọn phường / xã</option>
                                <option v-for="ward in wardData" :key="ward.WardID" :value="ward.WardName" >{{ ward.WardName }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-[21px]">
                        <router-link class="block float-left text-14px text-[#338dbc] leading-[55px] hover:text-sky-500" :to="{name: 'cart'}">Giỏ hàng</router-link>
                        <button type="submit" class="float-right relative h-[55px] leading-[55px] px-[30px] text-14px font-[500] text-white rounded-md bg-[#338dbc] hover:bg-sky-500">Tiếp tục đến phương thức thanh toán</button>
                    </div>
                </div>
            </form>
        </div>

        <CheckoutRightPanel />
    </div>
</template>

<script>
import CheckoutRightPanel from '../layout/CheckoutRightPanel.vue'
import { mapState, mapActions } from 'vuex'

export default {
    components: { CheckoutRightPanel },
    data() {
        return {
            provinceData: [],
            districtData: [],
            wardData: []
        }
    },
    computed: {
        ...mapState({
            orderInfo: state => state.order.info,
            authenticated: state => state.auth.authenticated
        })
    },
    watch: {
        'orderInfo.province': 'getDistrictData',
        'orderInfo.district': 'getWardData'
    },
    created() {
        this.getProvinceData();
    },
    methods: {
        ...mapActions({
            setOrderInfo: 'order/setOrderInfo',
        }),
        updateOrderInfo(key, event) {
            this.setOrderInfo({key: key, value: event.target.value});
        },
        async getProvinceData() {
            try {
                const response = await axios.get('/api/order-province');
                this.provinceData = response.data;
                this.provinceData.sort((a, b) => a.ProvinceID - b.ProvinceID);
            } catch(error) {
                this.error = error.response.data;
            }
        },
        async getDistrictData() {
            if (this.orderInfo.province) {
                try {
                    const selectedProvince = this.provinceData.find((p) => p.ProvinceName === this.orderInfo.province);
                    console.log(selectedProvince);
                    const response = await axios.get(`/api/order-district?province-id=${selectedProvince.ProvinceID}`);
                    this.districtData = response.data.filter(district => district.SupportType !== 0);
                    this.districtData.sort((a, b) => a.DistrictID - b.DistrictID);
                } catch(error) {
                    this.error = error.response.data;
                }
            } else {
                this.districtData = [];
            }
        },
        async getWardData() {
            if (this.orderInfo.district) {
                try {
                    let selectedDistrict = this.districtData.find((p) => p.DistrictName === this.orderInfo.district);
                    const response = await axios.get(`/api/order-ward?district-id=${selectedDistrict.DistrictID}`);
                    this.wardData = response.data;
                    this.wardData.sort((a, b) => a.WardCode - b.WardCode);
                    console.log(this.wardData);
                } catch(error) {
                    this.error = error.response.data;
                }
            } else {
                this.wardData = [];
            }
        },
        async getShippingFee() {
            try {
                let selectedDistrict = this.districtData.find((p) => p.DistrictName === this.orderInfo.district);
                const response = await axios.get('https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee', {
                    crossDomain: true,
                    params: {
                        from_district_id:1454,
                        service_id:53320,
                        service_type_id:null,
                        to_district_id:1452,
                        to_ward_code:"21012",
                        height:50,
                        length:20,
                        weight:200,
                        width:20,
                        insurance_value:10000,
                        coupon: null
                    }
                });
                
                console.log(response);
            } catch(error) {
                this.error = error.response.data;
            }
        }
    }
}

</script>