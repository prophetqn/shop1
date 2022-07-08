<template>
    <div class="flex relative justify-center ml-4">
        <div @click="updateIconSelect()" class="relative cursor-pointer">
            <ShoppingBagIcon class="h-7 text-red-500" />
            <span class="absolute inset-x-0 top-[10px] text-11px text-red-500 text-center font-[600] hover:animate-bounce">{{ totalItems }}</span>
        </div>
        <transition name="fade-scale">
            <div v-if="upperIconSelect === 'cart'" class="z-10">
                <svg class="absolute top-full right-[5px] z-20" width="20" height="20" viewBox="0 0 20 5" role="presentation">
                    <path d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z" fill="#ffffff"></path>
                </svg>
                <div class="z-50 block absolute top-[calc(100%+15px)] right-[-15px] w-[450px] bg-white border border-[#dfe3e8] rounded-md drop-shadow-lg px-[20px] py-[20px]">
                    <p class="text-16px text-center px-[10px] py-[6px] mb-[20px] bg-[#f3f5f6] border border-gray-200">Giỏ hàng</p>
                    <ul v-if="cartItems.length" class="border-b border-gray-200 pb-[10px] max-h-[310px] overflow-y-auto">
                        <li v-for="(item, i) in cartItems" :key="i" >
                            <div class="grid grid-cols-5 gap-[20px] p-[10px] items-center">
                                <div class="col-span-1">
                                    <img class="h-[64px] w-[64px] object-contain bg-white border border-gray-200 rounded-md" :src="item.images[0].src" :alt="item.product.name">
                                </div>
                                <div class="col-span-3">
                                    <h4 class="text-12px font-semibold uppercase hover:text-red-500 mb-[3px]">
                                        <router-link :to="{ name: 'products', params: { slug: item.product.slug } }">
                                            {{ item.product.name }}
                                        </router-link>
                                    </h4>
                                    <p class="text-12px text-[#969696] mb-[10px]">{{ item.size.name.toUpperCase() }} / {{ item.color.name }}</p>
                                    <p class="h-[24px] w-[24px] text-[#677279] text-13px leading-[24px] text-center bg-[#f5f5f5]">{{ item.pivot.quantity_select }}</p>
                                </div>
                                <div class="col-span-1 h-full flex flex-col justify-between">
                                    <div class="flex justify-end">
                                        <button class="h-5 w-5 font-semibold flex flex-col justify-center bg-[#e7ebec]" @click.prevent="deleteCartItem(i)"><XIcon class="h-[14px] w-[14px] mx-auto hover:text-red-500" /></button>
                                    </div>
                                    <p class="text-13px font-semibold text-right">{{ (item.product.exact_price*item.pivot.quantity_select).toLocaleString('en-US') }}₫</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="text-center border-b border-gray-200 pb-[10px]">
                        <svg width="61" height="45" viewBox="0 0 81 70" class="my-[10px] mx-auto">
                            <g transform="translate(0 2)" stroke-width="4" stroke="#1e2d7d" fill="none" fill-rule="evenodd">
                                <circle stroke-linecap="square" cx="34" cy="60" r="6"></circle>
                                <circle stroke-linecap="square" cx="67" cy="60" r="6"></circle>
                                <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
                            </g>
                        </svg>
                        <p class="text-12px text-[#677279]">Hiện chưa có sản phẩm</p>
                    </div>
                    <div class="grid grid-cols-2 px-[10px] py-[20px]">
                        <p class="col-span-1 text-left text-12px leading-[24px] uppercase text-[#677279]">Tổng tiền:</p>
                        <p class="col-span-1 text-16px text-right text-red-500 font-semibold">{{ totalPrice.toLocaleString('en-US') }}₫</p>
                    </div>
                    <div class="grid grid-cols-2 gap-[20px] px-[10px] pb-[20px]">
                        <router-link :to="{name: 'cart'}" class="col-span-1 relative transition-button-red h-[45px] leading-[45px] w-full px-[28px] text-12px text-white text-center  uppercase tracking-[1px] border border-red-500 bg-transparent hover:text-black">Xem giỏ hàng</router-link>
                        <router-link :to="{name: 'checkout'}" class="col-span-1 relative transition-button-red h-[45px] leading-[45px] w-full px-[28px] text-12px text-white text-center  uppercase tracking-[1px] border border-red-500 bg-transparent hover:text-black">Thanh toán</router-link>
                    </div>
                </div>
            </div>
            <div v-else></div>
        </transition>
    </div>
</template>

<script>
import { ShoppingBagIcon } from '@heroicons/vue/outline'
import { XIcon } from '@heroicons/vue/solid'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    components: { ShoppingBagIcon, XIcon },
    props: {
        upperIconSelect: {
            type: String
        }
    },
    data() {
        return {
            errors: '',
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.items
        }),
        ...mapGetters('cart', [
            'totalPrice',
            'totalItems'
        ])
    },
    methods: {
        ...mapActions({
            setCart: 'cart/setCart',
            deleteCartItem: 'cart/deleteCartItem',
            getAllCart: 'cart/getAllCart'
        }),
        updateIconSelect() {
            let selectOption = '';
            this.upperIconSelect === 'cart' ? selectOption = '' : selectOption = 'cart';
            this.$emit('updateIconSelect', selectOption);
        }
    }
}
</script>