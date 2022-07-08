<template>
    <div class="col-span-5 bg-[#fafafa] pr-[205px] pl-[44px] py-[30px] border-l border-gray-300">
        <ul class="border-b border-gray-200 pb-[10px]">
            <li v-for="(item, i) in cartItems" :key="item.unit_id" >
                <div class="grid grid-cols-6 gap-[5px] py-[10px] items-center">
                    <div class="col-span-1 relative">
                        <span class="absolute top-[-11px] right-[-6px] h-[22px] w-[22px] text-white text-12px leading-[22px] text-center bg-[#999999] rounded-full">{{ item.pivot.quantity_select }}</span>
                        <img class="h-[64px] w-[64px] object-contain bg-white border border-gray-200 rounded-md" :src="item.images[0].src" :alt="item.product.name">
                    </div>
                    <div class="col-span-4">
                        <h4 class="text-14px text-[#4b4b4b] font-medium hover:text-red-500">
                            <router-link :to="{ name: 'products', params: { slug: item.product.slug } }">
                                {{ item.product.name }}
                            </router-link>
                        </h4>
                        <p class="text-12px text-[#969696]">{{ item.color.name + '/' }}{{ item.size.name }}</p>
                    </div>
                    <div class="col-span-1 h-full flex flex-col justify-center">
                        <p class="text-14px text-[#4b4b4b] font-medium text-right">{{ (item.product.exact_price*item.pivot.quantity_select).toLocaleString('en-US') }}₫</p>
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
                <p class="float-right text-[#4b4b4b]">{{ totalPrice.toLocaleString('en-US') }}₫</p>
            </div>
            <div class="overflow-auto">
                <p class="float-left text-[#717171]">Phí vận chuyển</p>
                <p class="float-right text-[#4b4b4b]">{{ shippingFee ? shippingFee.toLocaleString('en-US')+'₫' : '-' }}</p>
            </div>
        </div>

        <div class="overflow-auto mb-[10px] py-[21px] leading-[24px]">
            <p class="float-left text-16px text-[#717171]">Tổng cộng</p>
            <p class="float-right">
                <span class="pr-[10px] text-13px text-[#969696]">VND</span>
                <span class="text-24px text-[#4b4b4b]">{{ (totalPrice + shippingFee).toLocaleString('en-US') }}₫</span>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        data() {
            return {
                shippingFee: 0
            }
        },
        computed: {
            ...mapState({
                cartItems: state => state.cart.items,
                orderInfo: state => state.order.info
            }),
            ...mapGetters('cart', [
                'totalPrice'
            ]),
            note: {
                get () {
                    return this.orderInfo.note;
                },
                set (value) {
                    this.setOrderInfo({key: "note", value: value});
                }
            }
        },
        methods: {
            ...mapActions('cart', [
                'deleteCartItem', 
                'modifyCartItemQuantity'
            ]),
             ...mapActions({
                deleteCartItem: 'cart/deleteCartItem',
                modifyCartItemQuantity: 'cart/modifyCartItemQuantity',
                setOrderInfo: 'order/setOrderInfo',
            })
        }
    }
</script>